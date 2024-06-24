import React from "react";
import styles from "./custom_input.module.scss";

const CustomInput = ({
  placeholder,
  value,
  onChange = () => {},
  required,
  type = "text",
  max,
  ...props
}) => {
  return (
    <input
      className={styles.CustomInput}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      type={type}
      max={max}
      maxLength={max}

      {...props}
    />
  );
};

export default CustomInput;
