import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import "./Home.css";

function Home() {
  return (
    <div className="App">
      <Header />

      <Main />

      <About />
    </div>
  );
}

export default Home;
