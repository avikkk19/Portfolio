import data from "../../data";
import SectionIntro from "../components/SectionIntro";
import { ButtonWhite } from "../components/Buttons";
export default function About() {
    return (
        <>
            <SectionIntro title={data.about.title} tagline={data.about.paragraph} options={{ textColor: "text-amber-50" }} />
            <div className="grid md:grid-cols-2 gap-2">
                <div className="mt-5 ml-2 md:ml-6 p-8 flex flex-col gap-6 bg-gradient-to-br from-gray-400/10 to-gray-500/5 backdrop-blur-sm rounded-2xl border border-gray-500/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h2 className="text-transparent bg-gradient-to-bl from-purple-400 via-white-500 to-amber-500 bg-clip-text text-3xl font-bold mt-2  pb-3 tracking-wide relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-1/3 after:h-0.5 after:bg-gradient-to-bl after:from-red-900 via-white-500 after:to-amber-500">
                        Why I Do What I Do ?
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">{data.about.whyIDoIt}</p>
                    <ul className="mt-2 space-y-3">
                        {data.about.bulletPoints.map((items, index) => {
                            return (
                                <li
                                    key={index}
                                    className="text-gray-200 pl-6 py-2 list-none relative hover:translate-x-2 transition-all duration-300 hover:text-amber-300"
                                >
                                    {items}
                                </li>
                            );
                        })}
                    </ul>
                    <ButtonWhite label="View Resume" ></ButtonWhite>
                </div>
                <div className="mt-5 ml-2 md:ml-6 p-6 flex flex-col gap-5 bg-gray-400/10 rounded-2xl h-full justify-between cursor-pointer">
                    <h3 className="text-gray-500 text-lg font-medium">Hover over this area to discover more about me!</h3>
                    <div className="flex-1 flex items-center justify-center group relative">
                        <img
                            src={data.about.profileImage}
                            alt="image not available"
                            className="mx-auto shadow-lg rounded-2xl"
                        />
                        <div className="absolute rounded-2xl p-10 bg-gray-900/80 h-29/30 flex items-center justify-center text-white translate-x-[200%] group-hover:translate-x-0 transition-all duration-500">
                            <span className="text-5xl sm:text-7xl text-yellow-400 font-serif leading-none drop-shadow-lg mr-2 select-none -translate-y-[100%]">
                                &#8220;
                            </span>

                            <h2 className="text-xl sm:text-lg md:text-2xl  font-normal leading-snug">{data.about.hoverFacts}</h2>

                            <span className="text-5xl sm:text-7xl text-yellow-400 font-serif leading-none drop-shadow-lg select-none translate-y-[180%]">
                                &#8221;
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}