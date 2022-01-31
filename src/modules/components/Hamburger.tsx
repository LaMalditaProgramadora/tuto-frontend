import classNames from 'classnames';
import React, { useState } from 'react';
import styles from '../styles/Hamburger.module.css';

interface HamburgerProps {
  toggleCallback: (active: boolean) => void;
}

function Hamburger({ toggleCallback }: HamburgerProps): React.ReactElement {
  const [state, setState] = useState(false);

  const toggle: () => void = () => {
    setState((ac) => {
      const aux = !ac;
      toggleCallback(aux);
      return aux;
    });
  };

  /* eslint-disable jsx-a11y/click-events-have-key-events */
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div
      className={classNames(state && styles.change, styles.container)}
      onClick={toggle}
    >
      <div className={styles.bar1} />
      <div className={styles.bar2} />
      <div className={styles.bar3} />
    </div>
  );
}

export default Hamburger;
