import React, { useState } from "react";
import styles from "./reviews.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomTextArea from "@/components/ui/custome_textarea/custome_textarea";
import { StarFill } from "react-bootstrap-icons";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { Col, Row } from "react-bootstrap";
import Review from "./review/review";
import supabase from "@/utils/db";
import { generateUUID } from "@/utils/helpers/helper";

const ReviewForm = ({ setReviews }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const nums = [1, 2, 3, 4, 5];
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);

  const [values, setValues] = useState({
    text: "",
    firstname: "",
    lastname: "",
    // rating: 0,
  });

  const post = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();

      let fileurl = null;

      if (file) {
        const avatarFile = file;
        const { data, error } = await supabase.storage
          .from("reviews_videos")
          .upload(`public/${file.name}`, avatarFile);

        console.log(data, error);

        const { data: urldata, error: urlError } = supabase.storage
          .from("reviews_videos")
          .getPublicUrl(data.path);

        if (error || urlError) {
          throw new Error(error);
        }

        fileurl = urldata.publicUrl;
        setFile(null);
        document.getElementById("fileSelect").value = "";
      }

      const uid = generateUUID();

      const newReview = { ...values, rating, uid, fileurl };

      const res = await supabase.from("reviews").insert(newReview);

      if (res.status == 201) {
        setReviews((prev) => [newReview, ...prev]);
        localStorage.setItem(
          "reviewIds",
          `${localStorage.getItem("reviewIds")},${uid}`
        );
        setValues({
          text: "",
          firstname: "",
          lastname: "",
        });
        setRating(0);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.ReviewForm} onSubmit={post}>
      <h4>Post a review</h4>
      <CustomTextArea
        rows={5}
        placeholder="Message"
        value={values.text}
        onChange={(e) => {
          setValues((prev) => ({ ...prev, text: e.target.value }));
        }}
        required
      />
      <CustomInput
        placeholder="First Name"
        onChange={(e) => {
          setValues((prev) => ({ ...prev, firstname: e.target.value }));
        }}
        value={values.firstname}
        required
      />
      <CustomInput
        placeholder="Last Name"
        onChange={(e) => {
          setValues((prev) => ({ ...prev, lastname: e.target.value }));
        }}
        value={values.lastname}
        required
      />

      <div className={styles.stars}>
        Rating : &nbsp;
        {nums.map((n) => {
          return (
            <StarFill
              key={`star_${n}`}
              className={`${styles.star}
          
          ${rating >= n ? styles.active : ""}
          ${hovered >= n ? styles.active : ""}
          `}
              onClick={() => {
                setRating(n);
              }}
              onMouseEnter={() => {
                setHovered(n);
              }}
              onMouseLeave={() => {
                setHovered(rating);
              }}
            />
          );
        })}
      </div>

      <CustomInput
        type="file"
        max={1}
        onChange={(e) => {
          const newFile = e.target.files[0];
          const acceptedExts = ["jpg", "jpeg", "mp4", "svg", "png", "MP4"];
          let fileError = "";

          const splitted = newFile.name.split(".");

          if (newFile.size > 5242880) {
            fileError = "File is too big";
          } else if (!acceptedExts.includes(splitted[splitted.length - 1])) {
            fileError = "File not supported";
          }

          if (fileError) {
            alert(fileError);
            setFile(null);
            document.getElementById("fileSelect").value = "";
          } else {
            console.log(newFile);
            setFile(newFile);
          }
        }}
        id="fileSelect"
        // value={file}
      />

      <CustomButton disabled={rating < 1} isLoading={isLoading}>
        Post Review
      </CustomButton>
    </form>
  );
};

const ReviewsScreen = ({ reviews: data }) => {
  const [reviews, setReviews] = useState(data || []);

  return (
    <main className={styles.ReviewsScreen}>
      <SectionHeading heading="Reviews" />
      <CustomContainer>
        <ReviewForm setReviews={setReviews} />
        <br />
        <Row>
          {reviews
            .sort(function (a, b) {
              var c = new Date(a.created_at);
              var d = new Date(b.created_at);
              return d - c;
            })
            .map((review, idx) => {
              return (
                <Col key={`${review.id}`} xs={12} lg={6}>
                  <Review review={review} setReviews={setReviews} index={idx} />
                </Col>
              );
            })}
        </Row>
      </CustomContainer>
    </main>
  );
};

export default ReviewsScreen;
