import * as _ from "lodash";

const HTTP_METHODS = ['POST', 'PUT', 'GET', 'PATCH', 'DELETE'];

let logoutCallBack;
let logoutTimer;

export function configure(logoutAction) {
    logoutCallBack = logoutAction;
}

function assertHTTPMethod(method) {
    if(!_.includes(HTTP_METHODS, method)){
        throw `Unknown HTTP method ${method}`
    }
}

export async function call(url, method = 'GET', body = undefined, headers = {}) {
    assertHTTPMethod(method)

    const result = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers,
        credentials: 'same-origin'
    });
    if (result.ok) {
        return result.text().then(body => body? JSON.parse(body) : {});
    } else {
        return Promise.reject(result);
    }
}

export async function apiCall(path, method, body = undefined, extraHeaders = {}) {
    try {
        clearTimeout(logoutTimer);
        logoutTimer = setTimeout(logoutCallBack, 10 * 60 * 1000);

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const url = encodeURI(path);
        const apiResult = await call(url, method, body, _.merge(extraHeaders, headers));
        return Promise.resolve(apiResult);
    } catch (result) {
        // Log them out based on the HTTP code
        if (result.serviceStatus === 401 || result.serviceStatus === 403) {
            logoutCallBack();
        }
        return Promise.reject(result);
    }
}
