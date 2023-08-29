// 无感刷新token
import axios from 'axios';
import { refreshToken, isRefreshRequest } from './refreshToken';
import { getToken, setToken, setRefreshToken } from './token';

const ins = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${getToken()}`
  }
});

ins.interceptors.response.use(async (res) => {
  if (res.headers.authorization) {
    const token = res.headers.authorization.replace('Bearer ', '');
    setToken(token);
  }
  if (res.headers.refreshToken) {
    const token = res.headers.refreshToken.replace('Bearer ', '');
    setRefreshToken(token);
  }
  // 如果是401错误，说明token过期，需要刷新token
  if (res.status === 401 && !isRefreshRequest(res.config)) {
    const isSuccess = await refreshToken();
    if (!isSuccess) {
      // 刷新token失败，跳转到登录页
      window.location.href = '/login';
      return;
    }
    // 刷新token后重新请求
    res.config.headers.Authorization = `Bearer ${getToken()}`;
    return await ins.request(res.config);
  }
})

export default ins;