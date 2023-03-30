import React from "react";
import "../css/testimonial.css";
import fotoUser from "../assets/images/mechanic.png";
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";
import { Row, Col } from "react-bootstrap";
const Testimonial = () => {
  return (
    <div className="testimonial container-fluid">
      <Row>
        <Col className="text-center">
          <div
            className="titleTesti"
            data-aos="zoom-out-down"
            data-aos-delay="1800"
          >
            <h5 className="text-primary fw-semibold">Testimonial</h5>
            <h2 className="mt-2 text-primary fw-bold">
              Gimana Menurut Mereka ?
            </h2>
            <div className="d-flex justify-content-center mt-3">
              <div className="garisbawah bg-primary"></div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <div className="ContainerDesTesti ">
            <KataMereka
              source={person3}
              namaUser={"Farhan Mahendra"}
              des={"Akhirnya Nemu Teknisi Ac yang Jujur dan Berpengalaman"}
              dataAos="flip-left"
              dataAosDelay={"2000"}
              dataAosDuration="1100"
            />
            <KataMereka
              source={person1}
              namaUser={"Muhammad Afrizal"}
              des={"Pelayanan yang bagus dan bisa tawar-menawar masalah harga"}
              dataAos="flip-left"
              dataAosDelay={"2200"}
              dataAosDuration="1100"
            />
            <KataMereka
              source={person2}
              namaUser={"Halim Perkasa"}
              des={
                "Dengan Keunggulan Bergaransi saya jadi tidak perlu khawatir"
              }
              dataAos="flip-left"
              dataAosDelay={"2400"}
              dataAosDuration="1100"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const KataMereka = ({
  namaUser,
  des,
  source,
  dataAos,
  dataAosDelay,
  dataAosDuration,
}) => {
  return (
    <div
      className="ContainerKataMereka d-flex flex-column justify-content-end"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      data-aos-duration={dataAosDuration}
    >
      <div className="ContainerdeskripsiTestimonial p-3 bg-white text-center">
        <p className="deskripsiTestimonial mb-4">" {des} "</p>
      </div>
      <div className="ContainerNamaUser d-flex flex-column align-items-center w-100 bg-primary">
        <img
          src={source}
          alt=""
          className="fotoUser rounded-circle border border-dark border-2"
        />
        <h6 className="namaUser text-center fw-semibold text-white">
          {namaUser}
        </h6>
      </div>
    </div>
  );
};
export default Testimonial;
