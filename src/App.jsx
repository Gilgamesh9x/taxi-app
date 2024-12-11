import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesInside from "./components/FeaturesInside";
import OurCar from "./components/OurCar";
import Footer from "./components/Footer";
import WhatsappIcon from "./assets/whatsapp.png";

function App() {
  return (
    <>
      <a
        href="https://wa.me/0708296250"
        className="fixed bottom-4 right-4 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={WhatsappIcon}
          alt="WhatsApp Icon"
          className="w-12 h-12 lg:w-16 lg:h-16"
        />
      </a>
      <Hero />
      <Features />
      <FeaturesInside />
      <OurCar />
      <Footer />
    </>
  );
}

export default App;
