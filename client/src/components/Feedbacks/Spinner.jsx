import React from 'react';
import { useSelector } from 'react-redux';
import { RingLoader as Loader } from 'react-spinners';

import { selectLoading } from 'slice/loadingSlice';

import styles from 'style/Feedbacks/Spinner.module.css';

const Spinner = ({ alwaysLoading = false }) => {
  const isLoading = useSelector(selectLoading)
  return alwaysLoading || isLoading ? (
    <div className={styles.background}>
      <div className={styles.spinner}>
        <Loader color={'white'} sizeUnit={'px'} size={90} loading={true} />
      </div>
    </div>
  ) : null
}

export default Spinner
