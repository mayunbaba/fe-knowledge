function setToken(token) {
  localStorage.setItem('token', token);
}
function getToken() {
  return localStorage.getItem('token');
}
function setRefreshToken(token) {
  localStorage.setItem('refreshToken', token);
}
function getRefreshToken() {
  return localStorage.getItem('refreshToken');
}

export { getToken, setToken, setRefreshToken, getRefreshToken };