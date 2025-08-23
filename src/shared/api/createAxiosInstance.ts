import axios from 'axios';
import Cookies from 'js-cookie';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';
import { deleteTokens, updateTokens } from './updateTokens';

export const createAxiosInstance = (baseURL: string) => {
  const axiosRequest = axios.create({
    baseURL,
  });
  const axiosRaw = axios.create({ baseURL });

  axiosRequest.interceptors.request.use(async (req) => {
    const token = Cookies.get(ACCESS_TOKEN_KEY);
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  });

  axiosRequest.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      const refresh = Cookies.get(REFRESH_TOKEN_KEY);

      if (
        (error.response?.status === 401 || error.response?.status === 500) &&
        !originalRequest._retry &&
        refresh
      ) {
        originalRequest._retry = true;
        try {
          const res = await axiosRaw.post('/auth/refresh', { refreshToken: refresh });
          const { accessToken, refreshToken } = res.data;
          await updateTokens(accessToken, refreshToken);

          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosRequest(originalRequest);
        } catch (refreshError) {
          await deleteTokens();
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosRequest;
};
