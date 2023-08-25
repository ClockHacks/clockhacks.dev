import { useState, useEffect } from "react";

const ProjectCarousel = ({ projects, currentProjectIndex, setCurrentProjectIndex }) => {
    return (
        <div className="relative">
            <div className="mt-3 text-center flex space-x-4 overflow-hidden">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`w-full h-full flex-shrink-0 w-72 p-4 bg-cover bg-center rounded-lg shadow-lg ${index === currentProjectIndex ? "" : "hidden"
                            }`}
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="flex flex-col items-center justify-center bg-black h-full bg-opacity-80 rounded p-2">
                            <p className="text-xl font-bold">{project.name}</p>
                            <p className="mt-3">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-4">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`h-4 w-4 rounded-full mx-1 focus:outline-none ${index === currentProjectIndex ? "bg-accent1" : "bg-gray-300"
                            }`}
                        onClick={() => setCurrentProjectIndex(index)}
                    ></button>

                ))}
            </div>
        </div>
    );
};

const About = () => {
    const [stats, setStats] = useState({
        participants: 0,
        projects: 0,
        moneyRaised: 0,
    });

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projects = [
        {
            name: "Space Out!",
            description:
                "Space Out Is a flashcard game designed to help you have fun and study effectively at the same time!",
            link: "https://devpost.com/software/spaced-out-fbv7tz",
            image:
                "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/283/098/datas/original.PNG",
        },
        {
            name: "Study Buddy",
            description:
                "Welcome Study Buddy, your new productivity companion. This cat-themed bot will help you stay on task and stop wasting your time.",
            link: "https://devpost.com/software/study-buddy-cro8xw",
            image:
                "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/283/505/datas/gallery.jpg",
        },
        {
            name: "once",
            description: "Automate repetitive task on the web by just doing it ONCE.",
            link: "https://devpost.com/software/autimeation",
            image:
                "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/285/045/datas/gallery.jpg",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setStats((prevStats) => ({
                ...prevStats,
                participants: Math.min(prevStats.participants + 1, 203),
                projects: Math.min(prevStats.projects + 1, 38),
                moneyRaised: Math.min(prevStats.moneyRaised + 1, 700),
            }));
        }, 1);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [projects.length]);

    return (
        <section className="p-3 md:p-10 bg-black flex flex-col justify-center items-center min-h-[50vh] typography">
            <h1 className="text-3xl md:text-4xl font-bold">
                By <span className="text-accent1">students</span>, for{" "}
                <span className="text-accent1">students</span>
            </h1>
            <div className="mt-2">
                <p className="mt-3">
                    ClockHacks is a hackathon founded by high school students whose mission
                    is to{" "}
                    <span className="font-bold">make hackathons more accessible to students.</span>
                </p>
                <p className="mt-3">
                    ClockHacks is themed around time. You will be able to work in teams of up to 4 persons to create whatever tech-related project than can have a positive impact on the world.
                </p>
            </div>
            <br />
            <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 space-x-0 justify-center items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="mt-5 text-3xl text-accent2">Analytics</h2>
                    <div className="flex mt-3">
                        <div className="mr-5">
                            <p className="font-bold">{stats.participants}</p>
                            <p>participants</p>
                        </div>
                        <div className="mr-5">
                            <p className="font-bold">{stats.projects}</p>
                            <p>projects</p>
                        </div>
                        <div>
                            <p className="font-bold">${stats.moneyRaised}+ USD</p>
                            <p>raised</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="mt-5 text-3xl text-accent2">Project Showcase</h2>
                    <ProjectCarousel
                        projects={projects}
                        currentProjectIndex={currentProjectIndex}
                        setCurrentProjectIndex={setCurrentProjectIndex}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
