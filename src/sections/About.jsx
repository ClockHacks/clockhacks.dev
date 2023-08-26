import { useState, useEffect } from "react";

const About = () => {
    const [stats, setStats] = useState({
        participants: 0,
        projects: 0,
        moneyRaised: 0,
    });

    const maxParticipants = 203,
        maxProjects = 38,
        maxMoneyRaised = 700;

    const participantsStep = maxParticipants / 100,
        projectsStep = maxProjects / 100,
        moneyRaisedStep = maxMoneyRaised / 100;

    useEffect(() => {
        const interval = setInterval(() => {
            setStats((prevStats) => ({
                participants: Math.min(prevStats.participants + participantsStep, maxParticipants),
                projects: Math.min(prevStats.projects + projectsStep, maxProjects),
                moneyRaised: Math.min(prevStats.moneyRaised + moneyRaisedStep, maxMoneyRaised),
            }));
        }, 5);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-5 md:p-10 flex flex-col justify-center items-center min-h-[50vh] w-screen typography">
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
            <div className="mt-5 flex flex-wrap items-center w-full md:space-y-0 space-y-5">
                <div className="md:w-1/2 w-full p-3">
                    <h2 className="text-3xl font-bold">
                        <span className="text-accent1">Analytics</span>
                    </h2>
                    <div className="mt-3 text-xl">
                        <p>
                            <span className="font-bold">{stats.participants.toFixed(0)}</span> <span className="text-accent2">participants</span>
                        </p>
                        <p>
                            <span className="font-bold">{stats.projects.toFixed(0)}</span> <span className="text-accent2">projects submitted</span>
                        </p>
                        <p>
                            <span className="font-bold">${stats.moneyRaised.toFixed(0)}+</span> <span className="text-accent2">raised</span>
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full p-3">
                    <h2 className="text-3xl font-bold">
                        <span className="text-accent1">Project Showcase</span>
                    </h2>
                    <div className="flex-wrap w-full mt-3">
                        <a
                            href="https://devpost.com/software/spaced-out-fbv7tz"
                            target="_BLANK"
                            rel="noopener noreferrer"
                        >
                            <div className="bg-yellow-500 p-3">
                                <span className="font-bold text-xl">Space Out!</span><br />
                                <span className="text-xs">First Overall</span><br />
                                <p className="mt-2 text-black">
                                    Space Out Is a flashcard game designed to help you have fun and study effectively at the same time.
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://devpost.com/software/pendulum-qbhlut"
                            target="_BLANK"
                            rel="noopener noreferrer"
                        >
                            <div className="bg-gray-400 p-3">
                                <span className="font-bold text-xl">Pendulum</span><br />
                                <span className="text-xs">Second Overall</span><br />
                                <p className="mt-2 text-black">
                                    Increase your productivity by lowering your temptation for instant gratification.
                                </p>
                            </div>
                        </a>
                        <a
                            href="https://devpost.com/software/optime-s7ozmn"
                            target="_BLANK"
                            rel="noopener noreferrer"
                        >
                            <div className="bg-yellow-600 p-3">
                                <span className="font-bold text-xl">Optime</span><br />
                                <span className="text-xs">Third Overall</span><br />
                                <p className="mt-2 text-black">
                                    Optime helps you scheduling and planning events.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
