import { useEffect, useState } from "react"
import useMediaQuery from "./hooks/useMediaQuery"
import { motion } from "framer-motion"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import LineGradient from "./components/LineGradient"
import Navbar from "./scenes/Navbar"
import DotGroup from "./scenes/DotGroup" // Import DotGroup here
import Landing from "./scenes/Landing"
import PageOne from "./scenes/PageOne"
import Instructions from "./scenes/Instructions"
import Activities from "./scenes/Activities"
import Testimonials from "./scenes/Testimonials"

import FAQ from "./scenes/FAQ"
import Contact from "./scenes/Contact"

import Footer from "./scenes/Footer"
import PrivacyPolicy from "./scenes/PrivacyPolicy"
import Inspiration from "./scenes/Inspiration"
import Warning from "./scenes/Warning"
import PageFive from "./scenes/PageFive"

function App() {
  const [selectedPage, setSelectedPage] = useState("home")
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isDesktop = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage("home")
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Router>
        <div className="app">
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/warning" element={<Warning />} />

            <Route
              path="/"
              element={
                <>
                  <div className="mx-auto md:h-full overflow-hidden">
                    {/* {isDesktop && (
                      <DotGroup
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    )} */}
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("home")}
                    >
                      <Landing setSelectedPage={setSelectedPage} />
                    </motion.div>
                  </div>
                  <LineGradient />

                  <div className="w-full mx-auto  ">
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("pageone")}
                    >
                      <PageOne />
                    </motion.div>
                  </div>
                  <LineGradient />

                  <div className="overflow-hidden">
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("instructions")}
                    >
                      <Instructions />
                    </motion.div>
                  </div>
                  <LineGradient />
                  <div className="md:h-full overflow-hidden">
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("Activities")}
                    >
                      <Activities />
                    </motion.div>
                  </div>
                  <LineGradient />
                  <div className="md:h-full overflow-hidden">
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("Testimonials")}
                    >
                      <Testimonials />
                    </motion.div>
                  </div>
                  <LineGradient />

                  <div className="md:h-full overflow-hidden">
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("PageFive")}
                    >
                      <PageFive />
                    </motion.div>
                  </div>

                  {/* <div className="w-5/6 mx-auto ">
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("faq")}
                    >
                      <FAQ setSelectedPage={setSelectedPage} />
                    </motion.div>
                  </div>
                  <LineGradient />
                  <div className="md:h-full overflow-hidden">
                    <motion.div
                      margin="0 0 -200px 0"
                      amount="all"
                      onViewportEnter={() => setSelectedPage("contact")}
                    >
                      <Contact />
                    </motion.div>
                  </div> */}

                  <Footer
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </>
              }
            />
            {/* <Route path="/success" element={<Success />} />
            <Route path="/failure" element={<Failure />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
