import { Hero } from "./UI/Hero.jsx";
import About from "./UI/About.jsx";
import Projects from "./UI/Projects.jsx";
import Contacts from "./UI/Contacts.jsx";
import Background from "./components/Background.jsx";
function App() {
  return (
    <>
      <section className="min-h-screen w-full flex items-center justify-center relative">
        <Background></Background>
        <Hero />
      </section>

      <section id="about" className="min-h-screen w-full">
        <About></About>
      </section>

      <section
        id="projects"
        className="min-h-screen w-full mt-10 md:mt-20 p-3 md:p-6"
      >
        <Projects></Projects>
      </section>

      <section
        id="contact"
        className="min-h-screen w-full mt-10 md:mt-20 p-3 md:p-6"
      >
        <Contacts></Contacts>
      </section>
    </>
  );
}

export default App;
