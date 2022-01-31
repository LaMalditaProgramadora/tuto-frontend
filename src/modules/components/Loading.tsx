import React from 'react';
import styles from '../styles/Loading.module.css';

interface LoadingProps {
  hidden: boolean;
}

function Loading({ hidden }: LoadingProps): React.ReactElement {
  return (
    <div className={`${styles.modal} ${styles.upper}`} hidden={hidden}>
      <img className={styles.loading_image} alt="" src="/assets/loading.gif" />
    </div>
  );
}

export default Loading;
