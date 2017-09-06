import { CLIENT_SET, CLIENT_UNSET } from './constants'

export function setClirnt(token) {
  return {
    type: CLIENT_SET,
    token,
  }
}

export function unsetClient(token) {
  return {
    type: CLIENT_UNSET,
  }
}