import React, { useEffect, useState } from "react";
import styles from "./review.module.scss";
import { StarFill, Trash3 } from "react-bootstrap-icons";
import { getInitials } from "@/utils/helpers/helper";
import supabase from "@/utils/db";
import { Image } from "react-bootstrap";

// CREATE TABLE public.reviews (
// 	id uuid NOT NULL,
// 	"text" varchar NULL,
// 	firstname varchar NULL,
// 	lastname varchar NULL,
// 	rating int NULL,
// 	CONSTRAINT reviews_pk PRIMARY KEY (id)

// );

const Video = ({ url }) => {
  return (
    <video width="320" height="240" controls preload="none">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const Review = ({ review, setReviews, index }) => {
  const rating = review?.rating;
  const noms = [1, 2, 3, 4, 5];
  const [hasDelete, setHasDelete] = useState(false);

  const deleteReview = async () => {
    try {
      const res = await supabase.from("reviews").delete().eq("id", review.id);
      if (res.status === 204) {
        setReviews((prev) => prev.filter((r, i) => index !== i));
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //   console.log(localStorage.getItem('test'));

  useEffect(() => {
    const ids = localStorage.getItem("reviewIds");
    setHasDelete(ids ? ids.includes(review?.uid) : false);
  }, []);

  return (
    <div className={styles.Review} data-aos="">
      <div className={styles.top}>
        <div className={styles.name}>
          {review.firstname && review.lastname && (
            <span>{getInitials(review.firstname, review.lastname)}</span>
          )}
        </div>
        <div>
          <div className={styles.n}>
            <p>
              {review.firstname} {review.lastname}
            </p>
            {hasDelete && (
              <Trash3 className={styles.del} onClick={deleteReview} />
            )}
          </div>
          {noms.map((n) => {
            return (
              <StarFill
                key={`${Math.random()}_${n}`}
                className={`${styles.star} ${rating >= n ? styles.active : ""}`}
              />
            );
          })}
        </div>
      </div>
      <br />
      <div>{review?.text}</div>
      {review.fileurl && (
        <>
          <br />
          {review?.fileurl?.includes(".mp4") ? (
            <Video url={review.fileurl} />
          ) : (
            <Image src={review.fileurl} alt="xx" width={200} />
          )}
        </>
      )}
      <small className={styles.data}>{new Date(review.created_at).toLocaleString()}</small>
    </div>
  );
};

export default Review;
