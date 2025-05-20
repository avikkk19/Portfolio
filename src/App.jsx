import {Hero} from "./UI/Hero.jsx";
import Background from "./components/Background.jsx";
function App() {

  return (
    <>
      <section
        className="min-h-screen w-full flex items-center justify-center relative border-2 border-red-600"
      >
        <Background></Background>
        <Hero />
      </section>

      <section id="about">
          
      </section>

    </>
  )
}

export default App
