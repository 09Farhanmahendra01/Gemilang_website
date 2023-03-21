import Navbar from "./components/navbar";
import Header from "./components/header.jsx";
import Keunggulan from "./components/keunggulan";
import "./css/app.css";
function App() {
  return (
    <div>
      <div className="header">
        <Navbar />
        <Header />
      </div>
      <div className="keunggulan">
        <Keunggulan />
      </div>
    </div>
  );
}

export default App;
