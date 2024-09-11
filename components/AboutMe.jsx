import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Python</li>
                <li>C</li>
                <li>Java</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>Next.js</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>R&D, Community, Bootcamp Team @ APUBCC</li>
            <li>Core Committee @ Notion APU</li>
            <li>Public Relations @ APUBCC Devmatch Hackathon</li>
            <li>Project Manager @ APUBCC Web3 Developer: Coding the Unknown</li>
            <li>Speaker + Event @ APUBCC Web3 101: More than Cryptocurrency</li>
            <li>Mentor @ APUBCC Sparkathon</li>
            <li>and more...</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Computer Science @ Asia Pacific University</li>
                <li>Science Stream @ SMJK Yu Hua</li>
          </ul>
        ),
    },
    {
        title: "Achievements",
        id: "achievements",
        content: (
          <ul className="list-disc pl-2">
                <li>APUBCC Buildstation 2024 - Champion</li>
                <li>Monash Hackfest 2024 - 3rd Place</li>
                <li>Google Workspace Hackathon 2024 - Champion</li>
                <li>Blockchain For Good Malaysian Inter-Varsity Hackathon - Top 10 Finalist</li>
                <li>APUBCC Sparkathon - 2nd Runner Up</li>
                <li>APAC Web 2.5 Ideathon - E-Commerce Track Winner</li>
          </ul>
        ),
    },
    {
        title: "Interests",
        id: "interests",
        content: (
          <ul className="list-disc pl-2">
                <li>Running</li>
                <li>Badminton</li>
                <li>Cars</li>
                <li>real</li>
          </ul>
        ),
    },
    
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/shaun.jpg" alt="shaun" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">I am a Year 2 Computer Science student with a passion for Web3 and technology. My experiences usually revolve
                    around community building, project management, and participating in hackathons. I am always looking for opportunities to learn and grow, and I am excited to see where my journey will take me.
                    </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("achievements")}
                        active= {tab === "achievements"}
                        >
                            {" "}
                            Achievements{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("interests")}
                        active= {tab === "interests"}
                        >
                            {" "}
                            Interests{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;