import data from "../../data";
const name = data.general.catchy; // Dont go fancy it is just the name 

const navData = [
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Skills", href: "#skills"},
    {name: "GitHub", href: "#github"},
    {name: "Contact", href: "#contact"},
]

function Nav() {
    return (
        <nav className="h-full">
            <ul className="flex flex-col items-start justify-start gap-10 h-full min-h-10  w-full md:gap-0 md:h-10 md:flex-row md:justify-evenly md:text-amber-50/60 md:text-md md:items-center">
                {navData.map((item, index) => {
                    return (
                        <li key={index} className="list-none hover:text-indigo-600 font-semibold text-xl cursor-pointer"><a href={item.href}>{item.name}</a></li>
                    );
                })}
            </ul>
        </nav>
    );    
}

export default Nav;