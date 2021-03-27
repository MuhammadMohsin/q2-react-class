import './App.css';
import Navbar from "./components/Nav";
import { Footer } from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />

      <About />

      <Footer />
    </div>
  );
}

export default App;
