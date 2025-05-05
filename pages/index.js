import dynamic from "next/dynamic"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import EmailSection from "../components/EmailSection"
import Footer from "../components/Footer"
import AchievementsSection from "../components/AchievementsSection"
import InfiniteMovingCardsDemo from "../components/InfiniteMovingCards"

//Server: not found error handler
const HeroSection = dynamic(() => import("../components/HeroSection"), { ssr: false })

export default function Home() {
  return (
    <>
      <HeroSection />
      <AchievementsSection />
      <AboutMe />
      <Projects />
      <InfiniteMovingCardsDemo />
      <EmailSection />
      <Footer />
    </>
  )
}
