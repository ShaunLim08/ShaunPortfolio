import React from "react";
import ProjectCard from "./ProjectCard";


const projectData = [
    {
        id: 16,
        title: "Dumplings",
        description: "This project is for Solana Breakout Hackathon 2025. It is an AI Agent as a Service that allows users to create their own Web3 AI agents and easily allow them to easily integrate into their applications.",
        image: "projects/dumplings.jpg",
        gitUrl: "https://github.com/Laikaiyong/Dumpling"
    },
    {
        id: 15,
        title: "DoxxScan.sol",
        description: "This project is for REDACTED Hackathon 2025. It is a tool that allows users to utilize different on-chain tools to find out information about a wallet address.",
        image: "projects/doxxscan.jpg",
        gitUrl: "https://github.com/Laikaiyong/DoxxScan.Sol"
    },
    {
        id: 14,
        title: "Frenz.fi",
        description: "This is my team's project for ETH Global Taipei 2025. We have developed a Social Currency Launchpad with AI features integrated utilizing Uniswap, Celo and Nodit.",
        image: "projects/frenzfi.jpg",
        gitUrl: "https://github.com/Laikaiyong/Frenz.Fi"
    },
    {
        id: 13,
        title: "CoinMaster",
        description: "This is my team's project for BNB Hack 2024 Q4. We have developed an AI Agentic Trading Bot while utilizing various APIs such as CoinGecko API to have real-time insights while trading.",
        image: "projects/coinmaster.png",
        gitUrl: "https://github.com/Laikaiyong/CoinMaster"
    },
    {
        id: 12,
        title: "SETTLE",
        description: "This is my team's project for Setel Hackathon 2024. We have implemented AI routes, various types of predictions and highlighting icons within our platform.",
        image: "projects/settle.png",
        gitUrl: "https://github.com/Laikaiyong/SETTLE"
    },
    {
        id: 11,
        title: "Butter",
        description: "This is my team's project for ETH Global Bangkok 2024. Where we optimize side events for people using AI and we make the event experience buttery smooth.",
        image: "projects/Butter.png",
        gitUrl: "https://github.com/ShaunLim08/Vitalik-Butterin"
    },
    {
        id: 10,
        title: "MrBeans",
        description: "This is my team's project for MCMC Datathon 2024. Mr Beans as a SME that optimizes on courier services specifically on delivering coffee beans using AI/ML.",
        image: "projects/mrbeans.png",
        gitUrl: "https://github.com/laikaiyong/mr-beans"
    },
    {
        id: 9,
        title: "SHIFT",
        description: "This is my team's project for ETHKL2024 Hackathon. It is a community platform to make sure multiple events don't clash while implementing quadratic funding on the side",
        image: "projects/shift.jpg",
        gitUrl: "https://github.com/Laikaiyong/SHIFT"
    },
    {
        id: 8,
        title: "blink.fund",
        description: "This is my team's submission for APUBCC Buildstation Ideathon 2024. It is a decentralized quadratic funding platform that implements Solana Blockchain Links (Blinks).",
        image: "projects/blinkfund.png",
        gitUrl: "https://github.com/Laikaiyong/blink.fund"
    },
    {
        id: 7,
        title: "Sol-Healthy",
        description: "This is my team's submission for Monash Hackfest 2024. It is an all in one healthcare solution that implements elements of Solana.",
        image: "/projects/solhealthy.png",
        gitUrl: "https://github.com/ShaunLim08/sol-healthy"
    },
    {
        id: 6,
        title: "EzBiznes",
        description: "Submission for Google Workspace Hackathon 2024. Its an all in one workspace to streamline SME operations.",
        image: "/projects/ezbiznes.png",
        gitUrl: "https://github.com/Laikaiyong/EzBisness"
    },
    {
        id: 5,
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
        id: 3,
        title: "BLOCKCHESS",
        description: "This is my team's submission for ETHKL2023 Hackathon. It integrates chess with a waging system using smart contracts to elevate the game experience.",
        image: "/projects/blockchess.png",
        gitUrl: "https://github.com/Jeanqianying/ETHKL"
    },
    {
        id: 2,
        title: "SurvOwl",
        description: "Submission for APUBCC's Sparkathon. It uses POAP tokens to incentivize respondents and verify surveys.",
        image: "/projects/survowl1.png",
        gitUrl: "https://github.com/codyy6/SparkathonWithShaun"
    },
    {
        id: 1,
        title: "Aeonify",
        description: "Submission for APAC Web 2.5 Ideathon. Its an idea that merges Web3 elements with the retail company Aeon.",
        image: "projects/aeonify.png",
        gitUrl: "https://www.canva.com/design/DAFnTRYltHc/lpdv3ivL9vUUq9QfiszG5Q/view?utm_content=DAFnTRYltHc&utm_campaign=designshare&utm_medium=link&utm_source=editor"
    },

];

const Projects = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8 text-black">My Projects</div>
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
