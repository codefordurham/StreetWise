import React from "react";
import PropTypes from "prop-types";
import styles from "./SheetRegion.module.css";

function SheetRegion(props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <img className={styles.icon} src={props.icon} alt={props.title} />
        <h4 className={styles.title}>{props.title}</h4>
      </div>
      <div className={styles.children}>
        {props.children}
      </div>
    </div>
  );
}

SheetRegion.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired
};

export default SheetRegion;
