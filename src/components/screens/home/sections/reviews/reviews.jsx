const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");

import { Image } from "react-bootstrap";
import styles from "./reviews.module.scss";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomButton from "@/components/ui/custom_button/custom_button";

const Video = ({ url }) => {
  return (
    <video width="" height="100px" controls preload="none">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const Review = ({ data }) => {
  const noms = [1, 2, 3, 4, 5];

  return (
    <div className={styles.scrItem}>
      <div className={styles.img}>
        <span>ss</span>
        {/* <Image src="/assets/user.jpg" fluid alt="user" /> */}
      </div>
      <div className={styles.text}>
        <p className={styles.name}>
          {data.firstname} {data.lastname}
        </p>
        <div>
          {noms.map((n) => {
            return (
              <StarFill
                key={`${Math.random()}_${n}`}
                className={`${styles.star} ${
                  data.rating >= n ? styles.active : ""
                }`}
              />
            );
          })}
        </div>

        <small className={styles.cont}>{data.text}</small>

        {data.fileurl && (
          <>
            <br />
            {data?.fileurl?.includes(".mp4") ? (
              <Video url={data.fileurl} />
            ) : (
              <Image src={data.fileurl} alt="xx" height={50} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

const ReviewsSection = ({ reviews }) => {
  return (
    <section className={styles.reviewsSection}>
      {/* <div className={styles.overlay} /> */}
      {/* <div className={styles.fader} /> */}

      <SectionHeading heading="Testimonials" />

      {/* <CustomContainer> */}
      <div className={styles.scroller}>
        <div className={styles.scrollHolder}>
          {reviews
            .sort(function (a, b) {
              var c = new Date(a.created_at);
              var d = new Date(b.created_at);
              return d - c;
            })
            .map((d, i) => {
              return <Review key={`scr_${i}`} data={d} />;
            })}
        </div>
        <div className={styles.scrollHolder}>
          {reviews
            .sort(function (a, b) {
              var c = new Date(a.created_at);
              var d = new Date(b.created_at);
              return d - c;
            })
            .map((d, i) => {
              return <Review key={`scr_${i}`} data={d} />;
            })}
        </div>
      </div>
      <CustomContainer>
        <div className={styles.btn}>
          <CustomButton href="/reviews">View More</CustomButton>
        </div>
      </CustomContainer>
      {/* </CustomContainer> */}
    </section>
  );
};

export default ReviewsSection;
