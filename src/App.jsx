import Navbar from "./components/navbar";
import Header from "./components/header.jsx";
import Keunggulan from "./components/keunggulan";
import KategoriJasa from "./components/KategoriJasa";
import Testimonial from "./components/Testimonial";
import Footer from "./components/footer";
import "./css/app.css";
function App() {
  return (
    <div>
      <div className="header position-relative">
        <Navbar
          href1={"#beranda"}
          href2={"#keunggulan"}
          href3={"#kategori"}
          href4={"#testimonial"}
        />
        <Header id={"beranda"} />
      </div>
      <GetWaves />
      <Keunggulan id={"keunggulan"} />
      <GetWaves2 />
      <KategoriJasa id={"kategori"} />
      <Testimonial id={"testimonial"} />
      <Footer />
    </div>
  );
}

const GetWaves = ({ id }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id={id}>
      <path
        fill="#1C8CC4"
        fill-opacity="1"
        d="M0,224L34.3,202.7C68.6,181,137,139,206,122.7C274.3,107,343,117,411,138.7C480,160,549,192,617,181.3C685.7,171,754,117,823,96C891.4,75,960,85,1029,106.7C1097.1,128,1166,160,1234,154.7C1302.9,149,1371,107,1406,85.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      ></path>
    </svg>
  );
};

const GetWaves2 = ({ id }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id={id}>
      <path
        fill="#EDEFF0"
        fill-opacity="1"
        d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,101.3C672,96,768,128,864,117.3C960,107,1056,53,1152,53.3C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};
const GetWaves3 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgb(223, 237, 236)"
        fill-opacity="1"
        d="M0,96L48,117.3C96,139,192,181,288,192C384,203,480,181,576,170.7C672,160,768,160,864,170.7C960,181,1056,203,1152,218.7C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};
export default App;
