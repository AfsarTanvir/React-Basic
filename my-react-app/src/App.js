import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Afsar Tanvir" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
      <About/>
    </>
  );
}

export default App;
