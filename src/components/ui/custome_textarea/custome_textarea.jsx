import React from "react";
import styles from "./custome_textarea.module.scss";

const CustomTextArea = ({
  variant = 1,
  rows = 3,
  placeholder,
  value,
  onChange = () => {},
  required
}) => {
  return (
    <textarea
      className={`${styles.CustomTextArea} ${styles[`v${variant}`]}`}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default CustomTextArea;
