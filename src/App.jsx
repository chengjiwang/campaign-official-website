import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Introduce from "./components/Introduce.jsx";
import Campaign from "./components/Campaign.jsx";
import Policy from "./components/Policy.jsx";
import Donate from "./components/Donate.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div id='index'>
        <Banner />
        <Introduce />
      </div>
      <Campaign />
      <Policy />
      <div id='donate'>
        <Donate />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
