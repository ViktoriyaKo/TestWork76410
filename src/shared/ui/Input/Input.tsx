'use client';
import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react';

import styles from './Input.module.scss';
import clsx from 'clsx';
import { Controller, FieldError, RegisterOptions, useFormContext } from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: FieldError;
  label?: string;
  rules?: RegisterOptions;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef((props: IProps, ref: LegacyRef<HTMLInputElement>) => {
  const { label, error, defaultValue, ...rest } = props;
  return (
    <div className={styles.wrapper}>
      <label>
        {label && <p className={styles.label}>{label}</p>}
        <input
          className={clsx(styles.input, props.className ? props.className : '')}
          {...rest}
          ref={ref}
        />
      </label>
      {props.error && <span className={styles.error}>{error?.message}</span>}
    </div>
  );
});

// eslint-disable-next-line react/display-name
const ControlledInput = forwardRef((props: IProps, ref: LegacyRef<HTMLInputElement>) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { name, onChange, rules, defaultValue } = props;
  const error = name ? (errors[name] as FieldError | undefined) : undefined;

  return (
    <Controller
      defaultValue={defaultValue && defaultValue}
      control={control}
      name={name ?? ''}
      rules={rules && rules}
      render={({ field }) => {
        return (
          <Input
            error={error}
            {...props}
            {...field}
            onChange={(value) => {
              field.onChange(value);
              onChange?.(value);
            }}
            ref={ref}
          />
        );
      }}
    />
  );
});

export default ControlledInput;
