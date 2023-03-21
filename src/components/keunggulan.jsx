import React from "react";
import { Row, Col } from "react-bootstrap";
import map from "../assets/images/map.jpg";
import garansi from "../assets/images/garansi.jpg";
import call from "../assets/images/call.jpg";
import meet from "../assets/images/meet.jpg";
import "../css/keunggulan.css";

// foto
const keunggulan = () => {
  return (
    <div className="containerKeunggulan px-5">
      {/* baris pertama */}
      <Row>
        <Col className="text-center mt-5">
          <div className="titleKeunggulan ">
            <h2 className="text-primary fw-bolder">Keunggulan Layanan</h2>
            <div className="d-flex justify-content-center mt-3">
              <div className="garisbawah bg-primary "></div>
            </div>
          </div>
        </Col>
      </Row>
      {/* baris kedua */}
      <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 mt-5">
        <Card
          image={map}
          title={"Layanan Se-Jabodetabek"}
          deskripsi={"Melayani service panggilan pada area Jabodetabek."}
        />
        <Card
          image={garansi}
          title={"Bergaransi"}
          deskripsi={"Terjamin Garansi Terhadap barang yang Telah diperbaiki."}
        />
        <Card
          image={call}
          title={"Kontak Langsung"}
          deskripsi={
            "Kamu dapat Menanyakan maupun berkonsultasi terkait kerusakan maupun hal lain yang di alami terhadap mekanik kami."
          }
        />
        <Card
          image={meet}
          title={"Mekanik Berpengalaman"}
          deskripsi={"Mekanik Sudah Berpengalaman kurang lebih selama 5 tahun"}
        />
      </Row>
    </div>
  );
};

const Card = ({ title, image, deskripsi }) => {
  return (
    <Col className=" d-flex justify-content-center g-4">
      <div class="row">
        <div class="col">
          <div class="card text-center border border-2">
            <div className="imagemap">
              <img src={image} class="card-img-top " alt="..." />
            </div>
            <div className="backgroundDes">
              <div class="card-body border-top border-2 border">
                <h5 class="card-title fw-bold">{title}</h5>
                <p class="card-text">{deskripsi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default keunggulan;
