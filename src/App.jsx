import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Introduce from "./components/Introduce.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header className="container max-w-screen-2xl mx-auto"/>
      <Banner />
      <Introduce />
    </div>
  );
}

export default App;
