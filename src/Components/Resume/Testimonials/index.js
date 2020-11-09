import React from "react";
import Styles from "./Testimonials.module.css";
import ColleaguePic from "../../../Images/samplepic.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Deepa Nanabala",
      job: "Software Engineer, Thomson Reuters",
      picture: ColleaguePic,
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Colleague 2",
      job: "Job title",
      picture: ColleaguePic,
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Colleague 3",
      job: "Job title",
      picture: ColleaguePic,
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: "Colleague 4",
      job: "Job title",
      picture: ColleaguePic,
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const colleagues = testimonials.map((testimonial, index) => {
    return (
      <div className={Styles.card}>
        <div className={Styles.colleagueimage}>
          <img id="pictureImage" src={testimonial.picture} alt="Portrait" />
        </div>
        <div className={Styles.container}>
          <h2>{testimonial.name}</h2>
          <h3>{testimonial.job}</h3>
          <p>{testimonial.feedback}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={Styles.topcontainer}>
      <h1>Testimonials</h1>
      <div className={Styles.testimonials}>{colleagues}</div>
    </div>
  );
};

export default Testimonials;
