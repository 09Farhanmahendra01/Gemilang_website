import React from "react";
import { Row, Col } from "react-bootstrap";
import map from "../assets/images/map.jpg";
import garansi from "../assets/images/garansi-removebg-preview.png";
import call from "../assets/images/call.png";
import mechanic from "../assets/images/mechanic.png";
import "../css/keunggulan.css";

// foto
const keunggulan = ({ id }) => {
  return (
    <div className="containerKeunggulan px-5" id={id}>
      {/* baris pertama */}
      <Row>
        <Col className="text-center">
          <div className="titleKeunggulan ">
            <h2
              className="text-primary fw-bolder"
              data-aos="fade-down"
              data-aos-duration={800}
              id={id}
            >
              Keunggulan Layanan
            </h2>
            <div
              className="d-flex justify-content-center mt-3"
              data-aos="fade-down"
              data-aos-duration={800}
            >
              <div className="garisbawah bg-primary"></div>
            </div>
          </div>
        </Col>
      </Row>
      {/* baris kedua */}
      <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 mt-5 d-flex justify-content-center">
        <Card
          image={map}
          title={"Layanan bekasi dan sekitarnya"}
          deskripsi={"Melayani service panggilan pada area Jabodetabek."}
          dataAosDelay="400"
          dataAosDuration="700"
        />
        <Card
          image={garansi}
          title={"Bergaransi"}
          deskripsi={"Terjamin Garansi Terhadap barang yang Telah diService."}
          dataAosDelay="800"
          dataAosDuration="700"
        />
        <Card
          image={call}
          title={"Kontak Langsung"}
          deskripsi={
            "Kamu dapat Menanyakan maupun berkonsultasi terkait kerusakan maupun hal lain yang di alami terhadap mekanik kami."
          }
          dataAosDelay="1200"
          dataAosDuration="700"
        />
        <Card
          image={mechanic}
          title={"Mekanik Berpengalaman"}
          deskripsi={"Mekanik Sudah Berpengalaman kurang lebih selama 5 tahun."}
          dataAosDelay="1400"
          dataAosDuration="700"
        />
      </Row>
    </div>
  );
};

const Card = ({ title, image, deskripsi, dataAosDelay, dataAosDuration }) => {
  return (
    <Col className=" d-flex justify-content-center g-3">
      <div class="row">
        <div class="col">
          <div
            class="card text-center border border-2"
            data-aos="flip-left"
            data-aos-delay={dataAosDelay}
            data-aos-duration={dataAosDuration}
          >
            <div className="imagemap">
              <img src={image} class="card-img-top " alt="..." />
            </div>
            <div className="backgroundDes">
              <div class="card-body border-top border-2 border">
                <h5 class="card-title fw-bold ">{title}</h5>
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
