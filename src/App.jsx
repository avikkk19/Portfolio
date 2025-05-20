import {Hero} from "./UI/Hero.jsx";
import About from "./UI/About.jsx";
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
    </>
  )
}

export default App
