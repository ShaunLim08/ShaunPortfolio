const achievementsList = [
    {
      metric: "Projects",
      value: "14",
    },
    {
      metric: "Awards",
      value: "9",
    },
    {
      metric: "Years",
      value: "3-ish",
    },
  ]
  
  const AchievementsSection = () => {
    return (
      <section className="w-full py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="border-[#33353F] border rounded-md py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
              {achievementsList.map((achievement, index) => {
                return (
                  <div key={index} className="flex flex-col items-center justify-center w-full sm:w-auto py-4 sm:py-0">
                    <h2 className="text-black text-3xl sm:text-4xl font-bold">{achievement.value}</h2>
                    <p className="text-black text-sm sm:text-base mt-1">{achievement.metric}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default AchievementsSection
  