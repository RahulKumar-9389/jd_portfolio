import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";


const App = () => {
  return <>

    <section id="home">
      <Header />
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>


  </>
};

export default App;