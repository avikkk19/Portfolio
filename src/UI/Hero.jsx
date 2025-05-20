import { useEffect, useState } from "react";
import data from "../../data";
import Nav from "./Nav.jsx";
import { HeadingLarge, HeadingSmall } from "../components/Headings.jsx";
import Spline from '@splinetool/react-spline';
import { Menu, X } from "lucide-react";

const name = data.general.name; // Dont go fancy it is just the name 
function Header() {
    const [navState, setNavState] = useState(false); // Mokshith- true == open, false == close
    function setNav() {
        setNavState(!navState);
    }
    return (
        <header className="flex justify-between items-center relative top-0  px-4 py-1 md:px-6 text-amber-50 md:py-2 min-w-screen max-h-12">
            <h1 className="text-2xl font-semibold md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">{name}</h1>
            <div className="md:hidden cursor-pointer absolute right-6 z-10" onClick={setNav}>{navState ? <X /> : <Menu />}</div>
            <div
                className={`md:hidden absolute w-50 px-5 py-10 top-0 right-0 h-[calc(100vh-30%)] rounded-2xl transition-transform duration-300  ${navState ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ backgroundColor: "rgba(0,0,0,0.1)", backdropFilter: "blur(10px)" }}
            >
                {navState && <Nav />}
            </div>
        </header>
    );
}



function Hero() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const scrollThreshold = 500;
        const buffer = 50;

        const handleScroll = () => {
            const scrollPos = window.scrollY;

            if (isScrolled && scrollPos < scrollThreshold - buffer) {
                setIsScrolled(false);
            } else if (!isScrolled && scrollPos > scrollThreshold + buffer) {
                setIsScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    // Track if WebGL is available and if Spline failed
    const [webglError, setWebglError] = useState(false);

    // Utility to check WebGL support
    function isWebGLAvailable() {
        try {
            const canvas = document.createElement("canvas");
            return !!(
                window.WebGLRenderingContext &&
                (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
            );
        } catch (e) {
            return false;
        }
    }

    // Only check once on mount
    useEffect(() => {
        if (!isWebGLAvailable()) {
            setWebglError(true);
        }
    }, []);

    return (
        <div className="w-full overflow-x-hidden p-2">
            <Header />

            <div className="md:flex md:flex-row-reverse md:gap-15 md:px-10 md:items-center">
                <section className="h-screen w-full border-2 overflow-hidden">
                    <div className="h-3/8 w-full scale-190 translate-x-15 translate-y-[45%] md:translate-x-40 md:translate-y-15 md:h-7/8 md:scale-115 ">
                        {!webglError ? (
                            <Spline
                                scene="https://prod.spline.design/Zdm1LQAreiugS6eP/scene.splinecode"
                                onError={() => setWebglError(true)}
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-red-400 bg-black/70 rounded-xl p-8">
                                <span>
                                    3D experience unavailable: WebGL is not supported or context was lost.
                                </span>
                            </div>
                        )}
                    </div>
                </section>
                <section
                    className="w-full flex flex-col items-center gap-4 px-5 py-8 -translate-y-[35%] md:translate-y-0 transition-opacity duration-700 ease-in-out"
                    style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        borderRadius: "24px",
                        border: "1px solid rgba(255, 255, 255, 0.18)"
                    }}
                >
                    <HeadingLarge label={data.hero.Heading} />
                    <HeadingSmall label={data.hero.tagline} className="text-gray-300  xl:mx-15" />
                    <HeadingSmall label={data.hero.description} className="text-amber-50 xl:mx-15" />
                </section>
            </div>
            <div
                className={`hidden md:block w-1/2 rounded-3xl m-2 px-6 py-2 backdrop-blur-lg shadow-md transition-all duration-700 ease-in-out
                        ${isScrolled ? 
                            "fixed top-4 left-0 right-0 z-50 mx-auto max-w-4xl opacity-100 animate-fadeIn2"
                        : "absolute top-[80%] transform opacity-100 animate-fadeIn"
                    }`}
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: "opacity 0.7s ease-in-out, transform 0.5s",
                }}
            >
                <Nav />
            </div>

        </div>
    );
}

export { Hero };