import React from "react";
import "../css/kategoriJasa.css";
import { Row, Col } from "react-bootstrap";
// Image
import kulkas from "../assets/images/kulkas.png";
import ac from "../assets/images/ac.png";
import mesincuci from "../assets/images/mesinCuci.png";
import showcase from "../assets/images/showcase.png";
const KategoriJasa = () => {
  return (
    <div className="KategoriJasa container-fluid z-2 pb-5">
      {/* Baris 1 */}
      <Row>
        <Col className="text-center">
          <div className="titleKeunggulan ">
            <h2
              className="text-primary fw-bolder"
              data-aos="fade-down"
              data-aos-duration={800}
            >
              Ragam Kategori Jasa
            </h2>
            <div
              className="d-flex justify-content-center mt-3"
              data-aos="fade-down"
              data-aos-duration={800}
            >
              <div className="garisbawah2 bg-primary"></div>
            </div>
          </div>
        </Col>
      </Row>
      {/* Baris 2 */}
      <Row className="d-flex mt-5 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-xs-1 row-cols-1">
        <Col
          className="d-flex justify-content-center align-items-center mt-5"
          xxl={{ order: "first" }}
          xl={{ order: "first" }}
          lg={{ order: "first" }}
          md={{ order: "last" }}
          sm={{ order: "last" }}
          xs={{ order: "last" }}
          data-aos="fade-up"
          data-aos-delay={"400"}
        >
          <div className="bungkusDalamKiri w-100">
            <KetProduct
              title={"Kulkas"}
              des={
                "Isi Ulang freon | Memperbaiki Kebocoran | Ganti Kompressor | dll"
              }
            />
          </div>
        </Col>
        <Col
          className="mt-5"
          xxl={{ order: "last" }}
          xl={{ order: "last" }}
          lg={{ order: "last" }}
          md={{ order: "first" }}
          sm={{ order: "first" }}
          xs={{ order: "first" }}
          data-aos="zoom-in-down"
          data-aos-delay={"200"}
        >
          <div className="bungkusDalamKanan">
            <ImageProduct src={kulkas} />
          </div>
        </Col>
      </Row>
      {/* Baris 3 */}
      <Row className="mt-5  row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-xs-1 row-cols-1">
        <Col className="mt-5 " data-aos="zoom-in-down" data-aos-delay={"600"}>
          <div className="bungkusDalamKiri">
            <ImageProduct src={ac} />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-start mt-5"
          data-aos="fade-up"
          data-aos-delay={"800"}
        >
          <div className="bungkusDalamKanan w-100">
            <KetProduct
              title={"Air Conditioner (AC)"}
              des={
                "Bongkar Pasang Ac | Isi Ulang freon | Cuci Ac | Memperbaiki Kebocoran | dll"
              }
            />
          </div>
        </Col>
      </Row>
      {/* Baris 4 */}
      <Row className="d-flex mt-5 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-xs-1 row-cols-1">
        <Col
          className="d-flex justify-content-center align-items-center mt-5"
          xxl={{ order: "first" }}
          xl={{ order: "first" }}
          lg={{ order: "first" }}
          md={{ order: "last" }}
          sm={{ order: "last" }}
          xs={{ order: "last" }}
          data-aos="fade-up"
          data-aos-delay={"1200"}
        >
          <div className="bungkusDalamKiri w-100">
            <KetProduct
              title={"Mesin Cuci"}
              des={
                "Ganti Dinamo | Tukar Tambah | Memperbaiki Kelistrikan | dll"
              }
            />
          </div>
        </Col>
        <Col
          className="mt-5"
          xxl={{ order: "last" }}
          xl={{ order: "last" }}
          lg={{ order: "last" }}
          md={{ order: "first" }}
          sm={{ order: "first" }}
          xs={{ order: "first" }}
          data-aos="zoom-in-down"
          data-aos-delay={"1000"}
        >
          <div className="bungkusDalamKanan">
            <ImageProduct src={mesincuci} />
          </div>
        </Col>
      </Row>
      {/* Baris 5 */}
      <Row className="mt-5 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-xs-1 row-cols-1">
        <Col className="mt-5" data-aos="zoom-in-down" data-aos-delay={"1400"}>
          <div className="bungkusDalamKiri">
            <ImageProduct src={showcase} />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-start mt-5"
          data-aos="fade-up"
          data-aos-delay={"1600"}
        >
          <div className="bungkusDalamKanan w-100">
            <KetProduct
              title={"Showcase"}
              des={
                "Memperbaiki Kebocoran | Ganti Kompressor | Memperbaiki Kelistrikan | dll"
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

const KetProduct = ({ title, des, dataAos, dataAosDelay }) => {
  return (
    <div
      className="KetProduct w-100 d-flex flex-column align-items-center"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <h3 className="namaProduct">{title}</h3>
      <p className="textPerbaikan text-center">
        <span className="text-dark">"</span> {des}{" "}
        <span className="text-dark">"</span>
      </p>
    </div>
  );
};

const ImageProduct = ({ src, dataAos, dataAosDelay }) => {
  return (
    <div
      className="imageProduct bg-primary d-flex align-items-center justify-content-center"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <img src={src} alt="" />
    </div>
  );
};
export default KategoriJasa;
