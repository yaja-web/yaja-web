import React from "react";
import styles from "./about.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Image } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <SectionHeading heading="Meet The CEO" variant={2} />
      <div className={styles.clouds} />
      <CustomContainer>
        <div className={styles.cont}>
          <div className={styles.img}>
            <Image src="/assets/ceo.jpeg" fluid alt="ceo" />
          </div>

          <div className={styles.text}>
            <h2>Lorem, ipsum.</h2>
            <small>CEO, Company Name</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              veniam pariatur aliquam, iure similique nam esse repudiandae atque
              sunt laboriosam quidem natus, enim fugiat dolore? Unde architecto
              debitis quo, consequuntur blanditiis iure veritatis fugiat
              deserunt quis ea consequatur. Nostrum, dolores?
            </p>
            <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              veniam pariatur aliquam, iure similique nam esse repudiandae atque
              sunt laboriosam quidem natus, enim fugiat dolore? Unde architecto
              debitis quo, consequuntur blanditiis iure veritatis fugiat
              deserunt quis ea consequatur. Nostrum, dolores?
            </p>
          </div>
        </div>
        <Image src="/assets/svg/leaf.svg" alt="leaf" className={styles.leaf1} />
        <Image src="/assets/svg/leaf.svg" alt="leaf" className={styles.leaf2} />
      </CustomContainer>
      {/* <Image src={"assets/svg/cloud.svg"} alt='cloud'/> */}
    </section>
  );
};

export default AboutSection;
