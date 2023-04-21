import React from "react";
import "../css/navbar.css";
import logoGemilang from "../assets/images/iconsG-removebg-preview.png";
const Navbar = ({ href1, href2, href3, href4 }) => {
  return (
    <nav class="navbar navbar-expand-lg px-3 pt-3 position-fixed container-fluid">
      <div className="namanavbar align-self-center text-white fw-bold d-flex">
        <img src={logoGemilang} alt="" />
        <p className="d-flex align-items-end fs-5">emilang Services</p>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={"false"}
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container-navigasi container-fluid">
        <div className="navigasi">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href={href1}
                >
                  Beranda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href={href2}>
                  Keunggulan
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href={href3}>
                  Jasa Perbaikan
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active text-white" href={href4}>
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
