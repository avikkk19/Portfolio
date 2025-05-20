import SectionIntro from "../components/SectionIntro";
import data from "../../data";
import { useEffect, useState, useRef } from "react";

function Projects() {
    const [hoveredVideo, setHoveredVideo] = useState(null);
    const videoRefs = useRef({});

    useEffect(() => {
        if (hoveredVideo) {
            hoveredVideo.play();
        }
    }, [hoveredVideo]);

    const handleVideoLoad = (video) => {
        video.currentTime = 0;
        video.play();
        setTimeout(() => {
            video.pause();
            video.currentTime = 0;
        }, 1000);
    };

    return (
        <>
            <SectionIntro title={data.projects.title} tagline={data.projects.tagline} options={{textColor: "text-amber-50"}} />
            <div className="text-center mb-8">
                <span className="text-amber-50/80 text-sm font-medium bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                    Hover over videos to play
                </span>
            </div>
            <div className="flex flex-col gap-8 mt-5 p-2 md:p-5">
                {data.projects.projects.map((project, index) => {
                    return (
                        <div 
                            key={index}
                            className="group relative flex flex-col-reverse md:flex-row-reverse gap-8 rounded-2xl p-8 transition-all duration-300"
                        >
                            {/* Content Section */}
                            <div className="flex-1 space-y-4 p-8 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl border border-white/10 shadow-lg">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-200 text-base leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.techstack.map((tech, techIndex) => (
                                        <span 
                                            key={techIndex}
                                            className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 rounded-full border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Button */}
                                <a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25"
                                >
                                    View Project
                                </a>
                            </div>

                            <div className="md:w-1/2 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                                <div className="p-2 bg-gradient-to-br from-gray-900/60 to-gray-800/60">
                                    {project.type === "video" ? (
                                        <video 
                                            ref={el => videoRefs.current[index] = el}
                                            src={project.media} 
                                            className="w-full h-full min-h-[300px] md:object-cover rounded-lg"
                                            loading="lazy"
                                            preload="metadata"
                                            muted
                                            playsInline
                                            loop
                                            onLoadedData={() => handleVideoLoad(videoRefs.current[index])}
                                            onMouseEnter={(e) => setHoveredVideo(e.target)}
                                            onMouseLeave={(e) => {
                                                e.target.pause();
                                                setHoveredVideo(null);
                                            }}
                                        />
                                    ) : (
                                        <img 
                                            src={project.media} 
                                            alt={project.title || "project media"} 
                                            className="w-full h-full min-h-[300px] md:object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" 
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Projects;