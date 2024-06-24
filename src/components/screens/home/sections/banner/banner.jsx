import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import CustomButton from "@/components/ui/custom_button/custom_button";

const BannerSection = () => {
  return (
    <section className={styles.BannerSection}>
      <div className={styles.bg}>
        <CustomContainer>
          <div className={styles.wrap}>
            {/* <Image
              src="/assets/svg/tree_right.svg"
              alt="tree_right"
              className={styles.tree_right}
            /> */}
            <Image
              src="/assets/svg/bottle_mango.svg"
              alt="bottle"
              className={styles.bottle_right}
            />
            {/* <Image
              src="/assets/svg/tree_left.svg"
              alt="tree_right"
              className={styles.tree_left}
            /> */}
            <Image
              src="/assets/png/yaja-animals.png"
              alt="bottle"
              className={styles.masc_left}
            />
            <div className={styles.content}>
              <h1 className={fonts.HeadFont}>
                Welcome to <br />
                the world of <br />
                Yaja
              </h1>
              <br />
              <CustomButton>Know More</CustomButton>
              <br />
              <br />
              <CustomButton variant={2}>View Our Products</CustomButton>
            </div>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default BannerSection;
