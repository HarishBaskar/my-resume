import React from "react";
import Styles from "./Testimonials.module.css";
import ColleaguePic from "../../../Images/samplepic.png";

const Testimonials = () => {
  return (
    <div className={Styles.topcontainer}>
      <h1>What do my Colleagues say</h1>
      <div className={Styles.testimonials}>
        <div className={Styles.card}>
          <div className={Styles.colleagueimage}>
            <img
              id="pictureImage"
              src={ColleaguePic}
              alt="Portrait of Harish Baskar"
            />
          </div>
          <div className={Styles.container}>
            <h2>Colleague 1</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.colleagueimage}>
            <img
              id="pictureImage"
              src={ColleaguePic}
              alt="Portrait of Harish Baskar"
            />
          </div>
          <div className={Styles.container}>
            <h2>Colleague 2</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.colleagueimage}>
            <img
              id="pictureImage"
              src={ColleaguePic}
              alt="Portrait of Harish Baskar"
            />
          </div>
          <div className={Styles.container}>
            <h2>Colleague 3</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. , when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
          </div>
        </div>
        <div className={Styles.card}>
          <div className={Styles.colleagueimage}>
            <img
              id="pictureImage"
              src={ColleaguePic}
              alt="Portrait of Harish Baskar"
            />
          </div>
          <div className={Styles.container}>
            <h2>Colleague 4</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
