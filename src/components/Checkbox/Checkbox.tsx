import React from 'react';
import styles from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

export function Checkbox({ label, checked, onChange, disabled, containerClassName = '' }: CheckboxProps) {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      <input
        className={styles.input}
        type="checkbox"
        id={label}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
}
