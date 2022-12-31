import './App.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import Header from './Components/Header';
import Hero from './Components/Hero';
import Main from './Components/Main';
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/jetbrains-mono";

AOS.init();

function App() {
  return (
    <div className="App" style={{background: "#051728"}}>
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
