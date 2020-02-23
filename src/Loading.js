import PropTypes from "prop-types";
import React from 'react';
import styles from './Loading.module.css';

function Loading(props) {
  const { address } = props;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>
        Loading info for {address}...
      </div>
    </div>
  );
}

Loading.propTypes = {
  address: PropTypes.string.isRequired,
};

export default Loading;
