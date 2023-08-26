import React from "react";
import teamData from "../data/Team.data";

const Team = () => {
    return (
        <div className="min-h-screen py-10 text-white">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-accent1 text-center">Team</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamData.map((member, index) => (
                        <div
                            key={index}
                            className="bg-bg2 md:rounded-md shadow-md p-2"
                        >
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={member.imageSrc}
                                    alt={`${member.name}'s picture`}
                                    className="w-20 h-20 rounded-full mx-auto mb-2"
                                />
                            </a>
                            <div className="text-center">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent2 font-semibold hover:underline"
                                >
                                    {member.name}
                                </a>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
