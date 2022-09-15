import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sales from "./pages/Sales";
import "./index.css";
import Navbar from "./Navigation/Navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "30px"}}>
      <Sales />
      </div>
    </div>

  );
}

export default App;
