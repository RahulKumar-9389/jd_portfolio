import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";


const App = () => {
  return <>

    <section id="home">
      <Header />
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="experience">
      <Experience />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="footer">
      <Footer />
    </section>


  </>
};

export default App;