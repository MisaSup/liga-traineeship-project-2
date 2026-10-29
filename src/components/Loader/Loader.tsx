import React from 'react';
import styles from './Loader.module.css';
import { LoaderProps } from './Loader.types';

export function Loader({ isLoading, children, variant = 'circle' }: LoaderProps) {
  const loaderClass = variant === 'dot' ? styles.dot : styles.circle;

  return isLoading ? (
    <div className={loaderClass} role="status">
      <span className={styles.visuallyHidden}>Loading...</span>
    </div>
  ) : (
    <>{children}</>
  );
}
