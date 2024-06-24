/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./taste.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";

const TasteSection = () => {
  const cards = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
  ];

  return (
    <section className={styles.TasteSection}>
      <SectionHeading heading="The Real Taste Of Fun" variant={1} />
      <CustomContainer>
        <div className={styles.text}>
          <br />
          <h3>
            At Yaja, we're more than just food creators; we're dreamers,
            innovators, and believers in a tastier, healthier future.
          </h3>
          <p>
            That's because every Yaja in a pouch is free from artificial colors,
            flavours and preservatives.
          </p>
          <br />
          <br />
          <br />
          <h3>
            All our products are made from simple recipes - flip our pouch over
            and you'll see that our ingredients list is very short.
          </h3>
        </div>
        <br />
        <br />
        <div className={styles.cards}>
          <Row>
            {cards.map((c) => (
              <Col key={c.id} xs={6} md={3}>
                <div className={styles.card}>
                  <Image src={`/assets/icons/${c.id}.webp`} alt="icon" />
                  <br />
                  Lorem, ipsum.
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </CustomContainer>
    </section>
  );
};

export default TasteSection;
