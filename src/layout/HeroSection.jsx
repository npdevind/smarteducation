import React from "react";
import hero from "../assets/images/hero.png";

const HeroSection = () => {
  return (
    <>
      <div
        // className="bg-secondary opacity-25 text-light"
        style={{ height: "50rem", padding: "8rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2 className="mb-4">
                Free Test Now To Find Out Where You Stand
              </h2>
              <p>
                We have an out of the box procedure to organize class for each
                of the students of different ages.
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-danger">
                  <i className="bi bi-mortarboard-fill"></i> Free Test
                </button>
                <button className="btn btn-success">
                  <i className="bi bi-journal-bookmark-fill"></i> Select Your
                  Course
                </button>
              </div>
            </div>
            <div className="col-md-7 text-start">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
