import request from './request'
import { getRefreshToken } from './token';

let promise = null;
export async function refreshToken() {
  if (promise) {
    return promise;
  }
  promise = new Promise(async (resolve, reject) => {
    const res = await request({
      url: '/refreshToken',
      method: 'get',
      headers: {
        Authorization: `Bearer ${getRefreshToken()}`
      },
      __isRefreshToken: true
    })
    resolve(res.statue === 200);
  });
  promise.finally(() => {
    promise = null;
  })
  return promise;
}

export function isRefreshRequest(config) {
  return config.__isRefreshToken
}
