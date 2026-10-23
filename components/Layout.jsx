import Navbar from "./Navbar"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shaun Lim - CS Student | Product Manager | Web3 Builder</title>
      </Head>
      <div className="min-h-screen w-full bg-white dark:bg-[#080808] text-black dark:text-[#F3F3F3] transition-colors duration-150">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </>
  )
}

export default Layout
