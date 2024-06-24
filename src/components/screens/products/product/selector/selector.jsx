import React from "react";
import styles from "./selector.module.scss";
import { Image } from "react-bootstrap";

const Selector = ({
  products,
  currentProductIndex,
  setCurrentProductIndex,
}) => {
  return (
    <div className={styles.Selector}>
      {products.map((prod, i) => {
        return (
          <div
            className={styles.prod}
            key={prod.id}
            onClick={() => {
              setCurrentProductIndex(i);
            }}
          >
            <Image
              src={`/assets/flavours/${prod.name.toUpperCase()}.png`}
              alt="xx"
              className={i === currentProductIndex ? styles.active : ""}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Selector;
