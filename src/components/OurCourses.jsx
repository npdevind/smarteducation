import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import kindImg from "../assets/images/kid_course.jpg";
import grammar from "../assets/images/grammar.jpeg";
import toiefl from "../assets/images/TOIEFL.jpg";
import personality from "../assets/images/personality.jpg";
import business_english from "../assets/images/business_english.jpg";
import interview from "../assets/images/interview.png";

const OurCourses = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
  };
  return (
    <>
      <div className="container" style={{ height: "35rem" }}>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <img
                  src={kindImg}
                  className="card-img-top"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="card-body">
                  <h5>Kid Section</h5>
                  <span>Duration : 3 Months | 3 Day in a weak</span>
                  <Link className="d-flex justify-content-md-end fs-3">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <img
                  src={grammar}
                  className="card-img-top"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="card-body">
                  <h5>Grammar and writting</h5>
                  <span>Duration : 3 Months | 3 Day in a weak</span>
                  <Link className="d-flex justify-content-md-end fs-3">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <img
                  src={toiefl}
                  className="card-img-top"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="card-body">
                  <h5>TOIEFL / IELTS / PTE</h5>
                  <span>Duration : 6 Months | 3 Day in a weak</span>
                  <Link className="d-flex justify-content-md-end fs-3">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <img
                  src={personality}
                  className="card-img-top"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="card-body">
                  <h5>Personality Development</h5>
                  <span>Duration : 3 Months | 3 Day in a weak</span>
                  <Link className="d-flex justify-content-md-end fs-3">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <img
                  src={business_english}
                  className="card-img-top"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="card-body">
                  <h5>Business English</h5>
                  <span>Duration : 6 Months | 3 Day in a weak</span>
                  <Link className="d-flex justify-content-md-end fs-3">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <img
                  src={interview}
                  className="card-img-top"
                  style={{ height: "200px", width: "100%" }}
                />
                <div className="card-body">
                  <h5>Interview Training</h5>
                  <span>Duration : 1 Months | 3 Day in a weak</span>
                  <Link className="d-flex justify-content-md-end fs-3">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <div className="card-body">
                  <div className="p-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium, tenetur cum. Sapiente suscipit reprehenderit
                    dicta pariatur quia dolorum reiciendis aperiam cum delectus,
                    veniam, autem ad, doloremque quisquam tempora eveniet. Amet.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <div className="card-body">
                  <div className="p-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium, tenetur cum. Sapiente suscipit reprehenderit
                    dicta pariatur quia dolorum reiciendis aperiam cum delectus,
                    veniam, autem ad, doloremque quisquam tempora eveniet. Amet.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card m-2 course_card_shadow bg-white border-0">
                <div className="card-body">
                  <div className="p-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laudantium, tenetur cum. Sapiente suscipit reprehenderit
                    dicta pariatur quia dolorum reiciendis aperiam cum delectus,
                    veniam, autem ad, doloremque quisquam tempora eveniet. Amet.
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurCourses;
