import { AxiosError } from 'axios';

export const getErrorMessage = (err: unknown) => {
  const error = err as AxiosError<{ message: string }>;
  return error.response?.data?.message || error.message || 'Server error';
};
