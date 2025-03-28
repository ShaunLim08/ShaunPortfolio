import React from "react";

const achievementsList = [
    {
        metric: "Projects",
        value: "12",
    },
    {
        metric: "Awards",
        value: "7",
    },
    {
        metric: "Years",
        value: "2-ish",
    }
];

const AchievementsSection = () => {
    return (
        <div className="xl:gap-3 sm:py-3 xl:px-12">
            <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between">
                {achievementsList.map((achievement) => {
                    return (
                        <div className="flex flex-col items-center justify-center mx-4">
                            <h2 className="text-black text-4xl font-bold">
                                {achievement.value}
                            </h2>
                            <p className="text-black text-base">{achievement.metric}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AchievementsSection;
