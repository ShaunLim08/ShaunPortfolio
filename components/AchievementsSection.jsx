import React from 'react';

const achievementsList = [
  {
    index: '01',
    metric: 'Projects',
    value: '18',
  },
  {
    index: '02',
    metric: 'Awards',
    value: '11',
  },
  {
    index: '03',
    metric: 'Years',
    value: '3-ish',
  },
];

const AchievementsSection = () => {
  return (
    <section className="w-full border-b-2 border-black dark:border-white bg-neutral-100 dark:bg-[#101010] py-6 sm:py-8 transition-colors duration-150">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black dark:divide-white border-2 border-black dark:border-white bg-white dark:bg-[#080808]">
          {achievementsList.map((item) => (
            <div
              key={item.index}
              className="p-5 sm:p-7 flex flex-col justify-between hover:bg-neutral-50 dark:hover:bg-[#121212] transition-colors"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-[#FF3B00] mb-2 font-bold">
                [{item.index}] RECORDED_DATA
              </div>
              <div className="flex items-baseline justify-between mt-1">
                <span className="font-serif text-4xl sm:text-6xl font-normal text-black dark:text-white leading-none">
                  {item.value}
                </span>
                <span className="font-mono text-xs sm:text-sm uppercase font-bold text-black dark:text-[#CCCCCC]">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;