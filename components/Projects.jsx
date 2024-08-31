import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 1,
        title: "Sol-Healthy",
        description: "This is my team's submission for Monash Hackfest 2024. It is an all in one healthcare solution that implements elements of Solana.",
        image: "/projects/solhealthy.png",
        gitUrl: "https://github.com/ShaunLim08/sol-healthy"
    },
    {
        id: 2,
        title: "EzBiznes",
        description: "Submission for Google Workspace Hackathon 2024. Its an all in one workspace to streamline SME operations.",
        image: "/projects/ezbiznes.png",
        gitUrl: "https://github.com/Laikaiyong/EzBisness"
    },
    {
        id: 3,
        title: "Healthify",
        description: "Submission for Devmatch Hackathon 2024. It is a all in one healthcare application that implements MasChain API.",
        image: "/projects/healthify.png",
        gitUrl: "https://github.com/ShaunLim08/Healthify"
    },
    {
        id: 4,
        title: "AlgoAid",
        description: "Submission for Blockchain For Good Malaysian Inter-Varsity Hackathon. It is a Social Good App that uses blockchain to raise funds.",
        image: "/projects/algoaid.png",
        gitUrl: "https://github.com/Laikaiyong/Algo-Aid"
    },
    {
        id: 5,
        title: "BLOCKCHESS",
        description: "This is my team's submission for ETHKL2023 Hackathon. It integrates chess with a waging system using smart contracts to elevate the game experience.",
        image: "/projects/blockchess.png",
        gitUrl: "https://github.com/Jeanqianying/ETHKL"
    },
    {
        id: 6,
        title: "SurvOwl",
        description: "Submission for APUBCC's Sparkathon. It uses POAP tokens to incentivize respondents and verify surveys.",
        image: "/projects/survowl1.png",
        gitUrl: "https://github.com/codyy6/SparkathonWithShaun"
    },
    {
        id: 7,
        title: "Aeonify",
        description: "Submission APAC Web 2.5 Ideathon. Its an idea that merges Web3 elements with the retail company Aeon.",
        image: "projects/aeonify.png",
        gitUrl: "https://www.canva.com/design/DAFnTRYltHc/lpdv3ivL9vUUq9QfiszG5Q/view?utm_content=DAFnTRYltHc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Projects;
