import React from 'react';
import styles from './TextField.module.css';
import { TextFieldProps } from './TextField.types';

export function TextField({
  label,
  placeholder,
  containerClassName = '',
  inputType,
  value,
  onChange,
  errorText,
}: TextFieldProps) {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>
      <input
        type={inputType}
        className={styles.input}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorText && <div className={styles.invalid}>{errorText}</div>}
    </div>
  );
}
