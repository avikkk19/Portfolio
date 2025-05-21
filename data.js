const data = {
  general: {
    name: "Mokshith Rao",
    catchy: "Mokshith",
    email: "mokshithrao1481@gmail.com",
    location: "Hyderabad, Telangana, India",
    Phone: "1234567890"
  },
  hero: {
    Heading: "Hi, I'm Mokshith",
    tagline: "Computer Science Engineer | Web Developer | Machine Learning Enthusiast",
    description:
      "I design and develop responsive, scalable web applications with a strong focus on user experience and performance. Passionate about exploring cutting-edge technologies to build impactful, real-world solutions.",
  },
  about: {
    title: "About Me",
    paragraph:
      "I'm a Computer Science student passionate about building AI-powered, user-friendly web solutions. I thrive at the intersection of design, data, and real-world impact. I enjoy collaborating with diverse teams and constantly seek opportunities to learn new technologies and frameworks.",
    whyIDoIt:
      "I believe technology should solve real problems and improve lives. Whether it's helping someone navigate their city smarter or connecting people through intuitive design, I want to build solutions that matter.",
    bulletPoints: [
      "💻 Full-stack web & ML enthusiast",
      "🧠 Building AI travel assistant — Voyana",
      "🎯 Always exploring UI/UX magic",
      "🌐 Open source contributor",
      "📈 Data-driven problem solver",
      "🤝 Team player & mentor"
    ],
    resumeLink: "/resume.pdf",
    hoverFacts: `
      The journey of learning never ends. I am always curious, always building, and always striving to make technology more accessible and impactful. Whether it's experimenting with new frameworks or mentoring peers, I believe in sharing knowledge and growing together.
    `,
    profileImage: "/src/assets/image.jpg"
  },

  projects: {
    title: "Projects",
    tagline: "Here are some of my latest and most exciting projects, crafted with passion and innovation.",
    projects: [
      {
        title: "Trefloo",
        description: "An AI-powered travel platform focused on rural tourism, cultural immersion, and smart itinerary planning with features like local guides, AR tours, and multilingual support.",
        techstack: ["React", "Tailwind", "Supabase"],
        type: "video",
        link: "https://trefloo.vercel.app",
        media: "/src/assets/projects/Trefloo.mp4",
      },
      {
        title: "CardioGuard",
        description: "A real-time heart health monitoring and emergency alert system using ECG sensor data and machine learning to detect cardiac arrests and notify doctors and emergency contacts.",
        techstack: ["React", "Supabase", "Arduino", "Machine Learning", "Deno", "Typescript"],
        type: "video",
        link: "cardioGuard.vercel.app",
        media: "/src/assets/projects/cardioGuard.mp4",
      },
      {
        title: "Qconn",
        description: "A question-and-answer platform for students and mentors to interact, with role-based access, achievement points, and full CRUD support for content.",
        techstack: ["HTML", "CSS", "JavaScript", "Supabase"],
        type: "image",
        link: "https://5mokshith.github.io/Qconn",
        media: "/src/assets/projects/Qconn.png",
      },
      {
        title: "Crecon",
        description: "CreCon (Creator Connect) is a collaborative platform that brides the gap between content creators and freelance editors. Creators can post their editing/design needs, while editors can showcase their skills, chat, share demos, and finalize projects all in one place.",
        techstack: ["React", "Supabase", "Tailwind"],
        type: "video",
        link: "crecon.vercel.app",
        media: "/src/assets/projects/Crecon.mp4",
      },
      {
        title: "Chatbot",
        description: "An AI chatbot for public/enterprise use, handling queries about HR policies, IT support, and events. It features document analysis, profanity filtering, and scalable multi-user support.",
        techstack: ["FastAPI", "Python", "NLP", "Supabase", "BERT"],
        type: "video",
        link: "local development",
        media: "/src/assets/projects/chatBot.mp4",
      },
      {
        title: "ChefMate",
        description: "An intelligent recipe recommender that generates creative dishes based on user-provided ingredients using LLMs and interactive UI.",
        techstack: ["React", "OpenAI API", "Tailwind", "Anthropic API"],
        type: "video",
        link: "local development",
        media: "/src/assets/projects/chefMate.mp4",
      }
    ]
  }

};

export default data;
