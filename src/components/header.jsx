import React from "react";
import "../css/header.css";
import { Container, Row, Col } from "react-bootstrap";
import icon from "../assets/images/4389641-removebg-preview.png";
const header = () => {
  return (
    <div className="container-fluid h-100">
      <Row className="h-100 row-cols-lg-2 row-cols-1">
        {/* colom pertama */}
        <Col className="col1 text-center ">
          <div>
            <h3 className="text-white fw-bolder fs-2 ">
              Bingung, Cari Jasa Service yang tepat ?
            </h3>
            <h5 className="text-white mt-4">
              <span className="fw-bolder fs-4"> Gemilang Services,</span> Kini
              hadir untuk memenuhi kebutuhan Service elektronik anda!
            </h5>
            <div className="d-flex justify-content-center">
              <div className="textDes w-75 text-start mt-4">
                <p className="text-white">
                  Saat ini, Kamu tidak Perlu bingung lagi dalam mencari Jasa
                  Service Panggilan, dengan layanan ini kamu dapat menjadikan
                  pilihan dalam mencari Jasa Service elektronik anda tanpa harus
                  bingung mencarinya kesana kemari.
                </p>
                <h6 className="text-warning mt-4">
                  - BERGARANSI dan LEBIH EFISIEN -{" "}
                </h6>
              </div>
            </div>
          </div>
        </Col>
        {/* colom kedua */}
        <Col className="d-flex  justify-content-center align-items-start">
          <div className="imageIlustration">
            <img src={icon} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default header;
