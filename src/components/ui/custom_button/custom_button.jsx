import React from "react";
import styles from "./custom_button.module.scss";
import { Spinner } from "react-bootstrap";
import Link from "next/link";

const CustomButton = ({
  variant = 1,
  children,
  onClick = () => {},
  disabled,
  isLoading,
  href,
}) => {
  if (href) {
    return (
      <Link href={href}>
        <button
          className={`${styles.customButton} ${styles[`v${variant}`]}`}
          onClick={onClick}
          disabled={disabled}
        >
          {isLoading ? <Spinner /> : children}
        </button>
      </Link>
    );
  }

  return (
    <button
      className={`${styles.customButton} ${styles[`v${variant}`]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default CustomButton;
