import React, { useState } from "react";
import styles from "./product.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import { FLAVOUR_COLORS } from "@/constants/styles";
import { hexToFilter } from "css-filter-converter";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Selector from "./selector/selector";
import { motion } from "framer-motion";

const Product = () => {
  const products = [
    {
      id: "mango",
      name: "Mango",
      colors: FLAVOUR_COLORS.MANGO,
    },
    {
      id: "lychee",
      name: "Lychee",
      colors: FLAVOUR_COLORS.LYCHEE,
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const currentProduct = products[currentProductIndex];

  return (
    <div
      className={styles.Product}
      style={{
        backgroundColor: currentProduct.colors.color1,
      }}
    >
      <Selector
        products={products}
        currentProductIndex={currentProductIndex}
        setCurrentProductIndex={setCurrentProductIndex}
      />
      <div className={styles.bg}>
        <div className={styles.wrap}>
          <div className={styles.wave1}>
            <Image
              src="/assets/svg/wave2.svg"
              alt="wave1"
              style={{
                filter: hexToFilter(currentProduct.colors.color3).color,
              }}
            />
          </div>
          <div className={styles.wave2}>
            <Image
              src="/assets/svg/wave2.svg"
              alt="wave1"
              style={{
                filter: hexToFilter(currentProduct.colors.color2).color,
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.cont}>
        <CustomContainer>
          <div className={styles.desc}>
            <div className={styles.left}>
              <div className={styles.text}>
                <h3>{currentProduct.name}</h3>
                <hr
                  style={{
                    backgroundColor: currentProduct.colors.color4,
                  }}
                />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Error deleniti vero doloribus iusto magni voluptatum sunt
                  ullam nisi exercitationem tenetur vitae, autem perferendis,
                  nesciunt repudiandae eveniet possimus cupiditate deserunt
                  fugit inventore, dolorem architecto explicabo aut odit!
                  Consequatur eaque laborum atque, deleniti ipsa minima eveniet
                  libero error esse distinctio, temporibus aut? Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Quasi molestias
                  minus laudantium, eaque vitae earum eius deserunt adipisci
                </p>
                <br />
                <h4>Ingredients</h4>
                <p>
                  error dolore accusamus quos voluptates omnis totam? Harum, nam
                  similique explicabo quos ea molestiae quaerat officia itaque
                  repellat sint minima. Nobis fugit aut magnam id beatae dolores
                  hic, adipisci ullam nihil in!
                </p>
              </div>
              <div className={styles.nutr}>
                <div>
                  <h4>Nutrition Facts</h4>
                  <div className={styles.ser}>
                    <div>Serving Size</div>
                    <div>1 Glass (350ml)</div>
                  </div>
                  <div className={styles.table}>
                    <div className={styles.row}>
                      <p>Calories</p>
                      <p>150kj</p>
                    </div>
                    <div className={styles.row}>
                      <p>Total Fat</p>
                      <p>0g</p>
                    </div>
                    <div className={styles.row}>
                      <p>Sodium</p>
                      <p>60mg</p>
                    </div>
                    <div className={styles.row}>
                      <p>Total Carbohydrate</p>
                      <p>38g</p>
                    </div>
                    <div className={styles.row}>
                      <p>Dietary Fibre</p>
                      <p>1g</p>
                    </div>
                    <div className={styles.row}>
                      <p>Sugar</p>
                      <p>35g</p>
                    </div>
                    <div className={styles.row}>
                      <p>Protein</p>
                      <p>0g</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className={styles.right}
              animate={{ y: [-1000, 100, 85, 0] }}
              transition={{
                // ease: "circIn",
                bounce: 1,
                duration: 0.5,
              }}
              key={currentProduct.id}
            >
              <motion.div
                animate={["float"]}
                whileHover={["rotate", "grow"]}
                whileTap={["rotate", "grow"]}
                variants={{
                  float: {
                    y: [0, 10, 0],
                    x: [0, 10, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  },
                  grow: {
                    scale: 1.05,
                  },
                  rotate: {
                    rotate: [null, -5, 5, 0],
                    transition: {
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    },
                  },
                }}
              >
                <Image
                  src={`/assets/flavours/${currentProduct.name.toUpperCase()}.png`}
                  // src={`/assets/flavours/lychee.png`}
                  alt={currentProduct.id}
                />
              </motion.div>
            </motion.div>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default Product;
