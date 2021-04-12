import React from 'react';

import styles from 'style/Input.module.css';

export default function Input(props) {
  const { onChange, placeholder, type, value } = props;
  return (
    <input
      className={styles.Input}
      type={type || 'text'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
