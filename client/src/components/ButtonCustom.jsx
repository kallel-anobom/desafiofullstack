import React from 'react';

import styles from 'style/Button.module.css'

const ButtonCustom = (props) => {
  return (
    <button
      className={styles.button}
      type="submit"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default ButtonCustom;
