import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
    const openGitUrl = () => {
        window.open(gitUrl, "_blank");
    };

    return (
        <div className="border border-gray-300 rounded-xl">
            {/* <Image src={imgUrl} height={208} width={1000} className="md:h-72 hover:opacity-30 object-contain bg-no-repeat bg-center rounded-t-xl"/> */}
            <div
                className="h-52 rounded-t-xl relative group center center bg-no-repeat"
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            >
                <div className="overlay items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
                    <button
                        onClick={openGitUrl}
                        className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                    >
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-black" />
                    </button>
                </div>
            </div>

            <div className="text-white p-4">
                <h5 className="font-semibold text-xl text-black mb-2">{title}</h5>
                <p className="text-black px-4">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
