import { ActionType } from 'redux-promise-middleware'

export function pending(type: string) {
  return `${type}_${ActionType.Pending}`;
}

export function fulfilled(type: string) {
  return `${type}_${ActionType.Fulfilled}`;
}

export function failed(type: string) {
  return `${type}_${ActionType.Rejected}`;
}
