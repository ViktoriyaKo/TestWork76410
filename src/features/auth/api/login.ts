import { axiosAuthRequest, axiosRequest, getErrorMessage } from '@/shared/api';
import { TypeLoginRequest } from '@/features/auth/types/types';
import { updateTokens } from '@/shared/api/updateTokens';

export const login = async (payload: TypeLoginRequest) => {
  const { body, handleSuccess, handleError } = payload;
  try {
    const res = await axiosRequest.post('/auth/login', body);
    const { accessToken, refreshToken, ...restFields } = res.data;
    await updateTokens(accessToken, refreshToken);
    handleSuccess?.(restFields);
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    handleError?.(errorMessage);
  }
};

export const getUserInfo = async () => {
  try {
    const res = await axiosAuthRequest.get('/auth/me');
    return res.data;
  } catch (err) {
    throw err;
  }
};
