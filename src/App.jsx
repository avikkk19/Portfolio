import {Hero} from "./UI/Hero.jsx";
function App() {

  return (
    <>
      <section
        className="min-h-screen w-full flex items-center justify-center relative border-2 border-red-600"
      >
        <div className="absolute h-full w-full animate-pulse">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full -z-10"
              style={{
                width: "15px",
                height: "15px",
                background: "#ffbf00",
                opacity: 0.65,
                top: `${10 + Math.random() * 80}%`,
                left: `${10 + Math.random() * 80}%`,
                filter: "blur(5px)"
              }}
            />
          ))}
        </div>
        <Hero />
      </section>

      <section id="about">
          
      </section>

    </>
  )
}

export default App
