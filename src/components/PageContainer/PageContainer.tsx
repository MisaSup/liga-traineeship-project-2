import React from 'react';
import styles from './PageContainer.module.css';
import { PageContainerProps } from './PageContainer.types';

export function PageContainer({ children, className = '' }: PageContainerProps) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
