import { UserType } from '@/entities/user';

type TypeBaseRequest = {
  handleSuccess?: (arg: UserType) => void;
  handleError?: (arg: string) => void;
};

export type TypeUserPayload = {
  username: string;
  password: string;
};

export type TypeLoginRequest = TypeBaseRequest & { body: TypeUserPayload };
