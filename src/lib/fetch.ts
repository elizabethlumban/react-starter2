type METHOD_TYPE = "POST" | "PUT" | "GET" | "DELETE" | "PATCH";

let timer: any = 0;

type LogoutAction = () => void;
type ErrorAction = (error: any) => void;

const logout: LogoutAction = () => console.log("Logout");
const onUnexpectedError: ErrorAction = error => console.log(error);

const apiUrlBase = "";

export interface IFormValues {
  [key: string]: string | File | Blob;
}

function updateTimeout() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => logout(), 20 * 60 * 1000);
}

function resetTimeout(interactive: boolean) {
  if (interactive) {
    if (timer) {
      clearTimeout(timer);
    }
    updateTimeout();
  }
}

const endpoint = (url: string) => {
  return `${apiUrlBase}${url}`;
};

async function baseExecFetch(
  url: string,
  method: METHOD_TYPE,
  process: (res: Response) => Promise<any>,
  body?: any,
  canError = false,
  interactive = true,
  retrying = false,
): Promise<any> {
  if (body) {
    body = JSON.stringify(body);
  }

  let processedError = false;

  try {
    const endpointUrl = endpoint(url);
    const res = await fetch(endpointUrl, {
      body,
      headers: { "content-type": "application/json" },
      method,
    });

    if (!res.ok) {
      const payload = await res.json();

      if (res.status === 401) {
        if (!retrying && payload.moreInformation === "Token is invalid") {
          // ISAM issue with introspect do a single retry
          return await baseExecFetch(url, method, process, body, canError, interactive, true);
        }

        logout();
        return;
      }

      processedError = true;
      if (!canError) {
        onUnexpectedError({ res, payload });
      }

      // eslint-disable-next-line
      throw { status: res.status, statusText: res.statusText, payload };
    }

    resetTimeout(interactive);

    if (res.status === 204) {
      return {};
    }

    return await process(res);
  } catch (err) {
    if (!canError && !processedError) {
      onUnexpectedError(err);
    }

    throw err;
  }
}

// Because DELETE often returns empty string body
const parseResponseBody = async (res: Response) => {
  const txt = await res.text();
  try {
    return JSON.parse(txt);
  } catch (e) {
    return txt;
  }
};

const execFetch = (url: string, method: METHOD_TYPE, body?: any, canError = false, interactive = true): Promise<any> =>
  baseExecFetch(url, method, parseResponseBody, body, canError, interactive);

export async function get(url: string, canError = false, interactive = true) {
  return execFetch(url, "GET", null, canError, interactive);
}

export async function post(url: string, body: any, canError = false) {
  return execFetch(url, "POST", body, canError);
}

export async function put(url: string, body: any, canError = false) {
  return execFetch(url, "PUT", body, canError);
}

export async function $delete(url: string, body: any = {}, canError = false) {
  return execFetch(url, "DELETE", body, canError);
}

export async function patch(url: string, body: any = {}, canError = false) {
  return execFetch(url, "PATCH", body, canError);
}

export const apiCall = (url: string, method: METHOD_TYPE = "GET", body?: any) => execFetch(url, method, body);

export const systemApiCall = (url: string, method: METHOD_TYPE = "GET", body?: any) =>
  baseExecFetch(url, method, res => res.json(), body, false, true);

export type ProgressFunction = (pe: ProgressEvent) => any;

export function submitForm(url: string, fields: IFormValues, headers: any, onprogress: ProgressFunction | null) {
  // FormData represents the payload of the form
  const form = new FormData();

  // Attach all files and field values
  Object.keys(fields).forEach(f => form.append(f, fields[f]));

  // The XHR request/call
  const xhrRequest = new XMLHttpRequest();

  const endpointUrl = endpoint(url);

  // The "true" parametes makes the request asynchronous
  xhrRequest.open("POST", endpointUrl, true);

  // Set up the the request headers.
  // Skip "content-type" - it messes up xhr. See - http://www.olioapps.com/blog/formdata-fetch-gotchas/
  Object.keys(headers).forEach(h => h.toLowerCase() !== "content-type" && xhrRequest.setRequestHeader(h, headers[h]));

  // Set up the callback for the upload progress
  xhrRequest.upload.onprogress = onprogress || (() => null);

  // Wrap the result callback in a promise
  const responsePromise = new Promise((resolve, reject) => {
    xhrRequest.onreadystatechange = () => {
      // State 4 means "Done" - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
      if (xhrRequest.readyState === 4) {
        if (xhrRequest.status >= 200 && xhrRequest.status <= 299) {
          // Try to parse it if JSON
          const txt = xhrRequest.responseText;
          try {
            resolve(JSON.parse(txt));
          } catch (e) {
            resolve(txt);
          }
        } else {
          reject(xhrRequest.statusText);
        }
      }
    };
  });

  // Kick off the actual form submission
  xhrRequest.send(form);

  // Return the promise so the caller can await
  return responsePromise;
}
