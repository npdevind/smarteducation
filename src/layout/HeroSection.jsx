import React from "react";
import hero from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <>
      <div
        // className="bg-secondary opacity-25 text-light"
        style={{ padding: "8rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mb-4 hero_title" style={{ fontSize: "3.5rem" }}>
                Free Test Now To Find Out Where You Stand
              </h2>
              <span style={{ fontSize: "1rem" }}>
                We have an out of the box procedure to organize class for each
                of the students of different ages.
              </span>

              <div className="d-flex gap-3 mb-5 mt-4">
                <button className="btn btn-danger">
                  <i className="bi bi-mortarboard-fill"></i> Free Test
                </button>
                <button className="btn btn-success">
                  <i className="bi bi-journal-bookmark-fill"></i> Select Your
                  Course
                </button>
              </div>

              <div className="row">
                <div className="col-md-12 d-flex gap-2">
                  <i className="bi bi-telephone-fill text-primary"></i>
                  <div className=" d-flex gap-2">
                    <p>(+91) 9932053428</p>
                    <p>(+91) 7908892206</p>
                    <p>(+91) 9339944772</p>
                  </div>
                </div>

                <div className="col-md-12 d-flex gap-2">
                  <i className="bi bi-envelope-fill text-primary"></i>
                  <div className=" d-flex gap-2">
                    <span>director@smarteducation.org.in</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero_img">
              <img src={hero} alt="" style={{ width: "154%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
