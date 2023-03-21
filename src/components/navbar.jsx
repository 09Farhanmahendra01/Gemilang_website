import React from "react";
import "../css/navbar.css";
import logoGemilang from "../assets/images/iconsG-removebg-preview.png";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg px-3 pt-3">
      <div class="container-fluid">
        <div className="nama align-self-center text-white fw-bold d-flex">
          <img src={logoGemilang} alt="" />
          <p className="d-flex align-items-end fs-5">emilang Services</p>
        </div>

        <div className="navigasi">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Beranda
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="#">
                  Keunggulan
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="#">
                  Jasa Perbaikan
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active text-white" href="#">
                  Testimonial
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active text-white" href="#">
                  kontak
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
