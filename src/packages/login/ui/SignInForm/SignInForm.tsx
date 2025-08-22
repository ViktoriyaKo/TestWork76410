'use client';
import styles from './SignInForm.module.scss';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { Button, Input } from '@/shared/ui';
import { useState } from 'react';

const fields = [
  { label: 'Your login', type: 'text', placeholder: 'Enter your login', name: 'username' },
  {
    label: 'Your password',
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
  },
];

const initialData = {
  username: '',
  password: '',
};

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm({
    defaultValues: initialData,
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.title}>Welcome back!</h2>

        {fields.map((field) => {
          return <Input key={field.name} {...field} />;
        })}
        <Button type="submit" isLoading={isLoading}>
          Sign in
        </Button>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
