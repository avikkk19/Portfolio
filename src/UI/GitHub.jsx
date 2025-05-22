import SectionIntro from "../components/SectionIntro";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

function GitHub() {
    const [profiles, setProfiles] = useState([
        {
            username: "5mokshith",
            avatar: "https://github.com/5mokshith.png",
            description: "Full-stack developer passionate about building AI-powered solutions",
            topRepos: []
        },
        {
            username: "avikkk19",
            avatar: "https://github.com/avikkk19.png",
            description: "Web developer and open source enthusiast",
            topRepos: []
        }
    ]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetch repos only from 5mokshith
                const response = await fetch(
                    `https://api.github.com/users/5mokshith/repos?sort=stars&per_page=2`
                );
                const repos = await response.json();
                
                const sharedRepos = repos.map(repo => ({
                    name: repo.name,
                    description: repo.description || "No description available",
                    stars: repo.stargazers_count,
                    url: repo.html_url
                }));

                // Update both profiles with the same repos
                setProfiles(prevProfiles => 
                    prevProfiles.map(profile => ({
                        ...profile,
                        topRepos: sharedRepos
                    }))
                );
            } catch (error) {
                console.error('Error fetching repos:', error);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section className="min-h-screen w-full mt-10 md:mt-20 p-3 md:p-6">
            <SectionIntro 
                title="GitHub" 
                tagline="Follow me & star my projects!" 
                options={{ textColor: "text-amber-50" }}
            />
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {profiles.map((profile, index) => (
                    <div 
                        key={index}
                        className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                        {/* Profile Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <img 
                                src={profile.avatar} 
                                alt={`${profile.username}'s avatar`}
                                className="w-16 h-16 rounded-full border-2 border-purple-500/30"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-white">{profile.username}</h3>
                                <p className="text-gray-400 text-sm">{profile.description}</p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 mb-6">
                            <a
                                href={`https://github.com/${profile.username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 rounded-lg transition-all duration-300"
                            >
                                <Github className="w-5 h-5" />
                                Follow
                            </a>
                            <a
                                href={`https://github.com/${profile.username}?tab=repositories`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 rounded-lg transition-all duration-300"
                            >
                                View Repos
                            </a>
                        </div>

                        {/* Top Repositories */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white">Top Repositories</h4>
                            <div className="grid gap-4">
                                {profile.topRepos.map((repo, repoIndex) => (
                                    <a
                                        key={repoIndex}
                                        href={repo.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 block"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h5 className="text-white font-medium">{repo.name}</h5>
                                            <span className="flex items-center gap-1 text-amber-400 text-sm">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.327.668A.75.75 0 0112 .25z" />
                                                </svg>
                                                {repo.stars}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm">{repo.description}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default GitHub;