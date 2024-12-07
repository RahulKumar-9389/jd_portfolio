import About from "./components/About";
import Experience from "./components/Experience";
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


  </>
};

export default App;