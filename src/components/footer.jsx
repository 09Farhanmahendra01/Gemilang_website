import React from "react";
import "../css/footer.css";
import { Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="ContainerFooter bg-dark d-flex align-items-center justify-content-center">
      <h5 className="textCopyright text-white text-center">
        Copyright &copy; 2023 All right reserved | Jasa layanan service Powered
        by Gemilang Services
      </h5>
    </div>
  );
};

export default Footer;
