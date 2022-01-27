import { Fragment } from "react";
import styles from "../styles/Loading.module.css";

const Loading = (props: any) => {
  return (
    <Fragment>
      <div
        className={`${styles.modal} ${styles.upper}`}
        hidden={props.hidden}
      ></div>
      <div
        className={`${styles.loading_image_div} ${styles.upper}`}
        hidden={props.hidden}
      >
        <img
          className={styles.loading_image}
          alt=""
          src="/assets/loading.gif"
        ></img>
      </div>
    </Fragment>
  );
};

export default Loading;
