import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';
import Cookies from 'js-cookie';

export const updateTokens = async (accessToken: string, refreshToken: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, { sameSite: 'strict', secure: true });
  Cookies.set(REFRESH_TOKEN_KEY, refreshToken, { sameSite: 'strict', secure: true });
};

export const deleteTokens = async () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
  Cookies.remove(REFRESH_TOKEN_KEY);
};
