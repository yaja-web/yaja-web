import CustomInput from "@/components/ui/custom_input/custom_input";
import React from "react";
import styles from "./contact_form.module.scss";
import CustomTextArea from "@/components/ui/custome_textarea/custome_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
// import CustomTextArea from "@/components/ui/custom_textarea/custom_textarea";

const ContactForm = () => {
  return (
    <form
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.tri} />
      <h1>Say Us a Hello!</h1>
      <p>Let us know more about you.</p>
      <div className={styles.inps}>
        <CustomInput placeHolder="Full Name*" required />
        <CustomInput placeHolder="Email*" required type="email" />
        <CustomInput placeHolder="Mobile Number*" required type="tel" />
        <CustomTextArea placeholder="Message*" rows={3} required />
        <CustomButton type="submit">Submit</CustomButton>
      </div>
    </form>
  );
};

export default ContactForm;
