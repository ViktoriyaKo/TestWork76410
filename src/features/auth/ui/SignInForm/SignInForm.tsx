'use client';
import styles from './SignInForm.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Input } from '@/shared/ui';
import { useRouter } from 'next/navigation';

import { ERROR_MESSAGES } from '@/shared/constants';
import { login } from '@/features/auth/api/login';
import { TypeUserPayload, useAuthStore } from '@/features/auth';

const fields = [
  {
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    name: 'username',
    required: true,
    minLength: 3,
  },
  {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
    required: true,
    minLength: 3,
  },
];

const initialData: TypeUserPayload = {
  username: '',
  password: '',
};

const SignInForm = () => {
  const { setUser, setAuthorized } = useAuthStore();
  const router = useRouter();
  const methods = useForm({
    defaultValues: initialData,
  });

  const { isSubmitting } = methods.formState;

  const handleError = (err: string) => {
    methods.setError('password', {
      type: 'manual',
      message: err,
    });
    setAuthorized(false);
    setUser(null);
  };

  const handleSuccess = () => {
    router.push('/');
  };

  const onSubmit = async (data: TypeUserPayload) => {
    await login({
      body: data,
      handleSuccess,
      handleError,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <h1 className={styles.title}>Welcome back!</h1>

        {fields.map((field) => {
          const { required, minLength, ...props } = field;

          return (
            <Input
              key={field.name}
              rules={{
                required: { value: required, message: ERROR_MESSAGES.REQUIRED },
                minLength: { value: minLength, message: ERROR_MESSAGES.FIELD_TOO_SHORT },
              }}
              {...props}
            />
          );
        })}
        <Button fullWidth={true} type="submit" disabled={isSubmitting} isLoading={isSubmitting}>
          Login
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
