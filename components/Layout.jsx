import Navbar from "./Navbar"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Shaun's Portfolio</title>
      </Head>
      <div className="min-h-screen w-full">
        <Navbar />
        <main className="w-full px-4 sm:px-6 md:px-8 lg:px-12">{children}</main>
      </div>
    </>
  )
}

export default Layout
