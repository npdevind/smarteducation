import React from "react";
import aboutUsImg from "../assets/images/Image1.jpeg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img
            src={aboutUsImg}
            alt=""
            height="60%"
            className="rounded mx-auto d-block mb-3"
          />
        </div>
        <div className="col-md-6" style={{ marginTop: "9rem" }}>
          <p className="mb-3">
            Effective online tutoring program with an intuitive study model.
            Best quality study materials, chapter wise notes, quiz & qualitative
            exams to prepare you for achieving great results...
          </p>
          <div className="mb-5">
            <div className="about_unique_title m-2 fs-5">
              <i className="bi bi-check-circle-fill"></i> World Class
            </div>
            <div className="about_unique_title m-2 fs-5">
              <i className="bi bi-check-circle-fill"></i> 100% Preparation
            </div>
            <div className="about_unique_title m-2 fs-5">
              <i className="bi bi-check-circle-fill"></i> Affordable
            </div>
            <div className="about_unique_title m-2 fs-5">
              <i className="bi bi-check-circle-fill"></i> Always Available
            </div>
            <Link
              className="d-flex justify-content-md-end fs-4 gap-2"
              style={{ textDecoration: "none" }}
            >
              <p>Know More</p>
              <i className="bi bi-arrow-right-circle-fill"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
