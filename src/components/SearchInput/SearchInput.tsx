import React, { ChangeEventHandler, MouseEvent } from 'react';
import styles from './SearchInput.module.css';
import { SearchInputProps } from './SearchInput.types';

export function SearchInput({ onChange, value, onReset }: SearchInputProps) {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    onReset?.();
  };

  return (
    <div className={styles.panel}>
      <input className={styles.input} placeholder="search" onChange={onSearchInputChange} value={value} />
      <button className={styles.close} onClick={onResetBtnClick} type="button" aria-label="reset">
        ×
      </button>
    </div>
  );
}
