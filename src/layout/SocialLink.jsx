import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const SocialLink = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeReCAPTCHA = () => {};

  return (
    <>
      <div className="header__socials">
        <Link className="btn text-info border-0 fs-4">
          <i className="bi bi-google"></i>
        </Link>
        <Link className="btn text-primary border-0 fs-4">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link className="btn text-danger border-0 fs-4">
          <i className="bi bi-instagram"></i>
        </Link>
        <Link className="btn text-danger border-0 fs-3">
          <i className="bi bi-youtube"></i>
        </Link>

        <Link className="btn text-primary border-0 fs-3" onClick={handleShow}>
          <i className="bi bi-telephone-inbound-fill"></i>
        </Link>
      </div>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        backdrop={false}
        scroll={true}
        className="call_back_canvas"
      >
        <Offcanvas.Header
          closeButton
          style={{ position: "absolute", right: "25rem" }}
        ></Offcanvas.Header>
        <Offcanvas.Body style={{ marginTop: "6rem" }}>
          <div className="text-center mb-5">
            <h3>Get A Callback</h3>
            <h6>Please Provide These Details</h6>
          </div>
          <div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="mobile" />
                  <label htmlFor="mobile">Mobile</label>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="email" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="col-md-12 mb-5 text-center">
                <ReCAPTCHA
                  sitekey="6LeYScUpAAAAALyIxEK4a5Xkr-N7Dk2qF-srSUM9"
                  onChange={onChangeReCAPTCHA}
                />
              </div>
              <div className="col-md-12 text-center">
                <button className="btn btn-info">
                  <i className="bi bi-send-fill"></i> Send Request
                </button>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <div
        className="collapse navbar-collapse justify-content-end"
        id="socialNavbar"
      >
        <ul className="navbar-nav ">
          <li className="nav-item">
            <div className="d-flex gap-4">
              <Link className="btn text-info border-0 fs-4">
                <i className="bi bi-google"></i>
              </Link>
              <Link className="btn text-primary border-0 fs-4">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link className="btn text-danger border-0 fs-4">
                <i className="bi bi-instagram"></i>
              </Link>
              <Link className="btn text-danger border-0 fs-3">
                <i className="bi bi-youtube"></i>
              </Link>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default SocialLink;
