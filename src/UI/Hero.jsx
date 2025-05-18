import { useState } from "react";
import data from "../../data";
import { Menu, X } from "lucide-react";
import Nav from "./NAv";
const name = data.general.catchy; // Dont go fancy it is just the name 

function Header() {
    const [navState, setNavState] = useState(false); // Mokshith- true == open, false == close
    function setNav() {
        setNavState(!navState);
    }
    return (
        <header className="flex justify-between items-center relative px-4 py-1 md:px-6 text-amber-50 md:py-2 min-w-screen min-h-10 border-2 border-red-800">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <div className="md:hidden cursor-pointer absolute right-6 z-10 text-black" onClick={setNav}>{navState ? <X /> : <Menu />}</div>
            <div
                className={`md:hidden absolute w-50 px-5 py-10 top-0 right-0 h-[calc(100vh-30%)] rounded-2xl transition-transform duration-300  ${
                    navState ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ backgroundColor: "rgba(0,0,0,0.1)", backdropFilter: "blur(10px)" }}
            >
                {navState && <Nav />}
            </div>
        </header>
    );
}

export {Header}