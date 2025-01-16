import React, { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import SignUpDialog from "../shared/SignUpDialog"
import coolEnglishLogo from "../assets/cool english logo.png"
import coolEnglishHero from "../assets/Cool English_final version.webp"

const Landing = ({ setSelectedPage }) => {
  const [signingUp, setSigningUp] = useState(false)
  const checkout = () => {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    }

    fetch(
      "https://qkhx7dsa0d.execute-api.us-east-1.amazonaws.com/prod/subscriptions",
      requestOptions
    )
      .then(response => response.text())
      .then(html => {
        window.open(html, "_blank")
      })
      .catch(error => console.log("error", error))
  }

  const isAboveMd = useMediaQuery("(min-width: 1060px)")
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center h-screen py-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="flex flex-col  landscape-mobile:pb-2 pb-16 short-screen:pb-4 landscape-mobile:pt-8 font-quest">
          {" "}
          <img src={coolEnglishLogo} className="h-40 " />
          {/* <img src={coolEnglishHero} className="rounded-full h-60" /> */}
          <p className="pr-16">Teach better classes today!</p>
        </div>
      </motion.div>
      {isAboveMd ? (
        // DESKTOP VIEW================================================================
        <div className="w-full flex flex-col items-center justify-center gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            className="flex flex-col justify-center items-center gap-8 text-center text-lg text-gray-100 font-quest"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <p className="font-semibold"></p>

            <p></p>

            <p></p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex text-center gap-4">
              <button
                onClick={() => setSigningUp(true)}
                className="z-10 w-40 the-one bg-gradient-to-r from-blue-500 to-teal-400 p-[1px] rounded-lg font-montserrat font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px]"
              >
                <div className="bg-neutral-950 hover:text-neutral-950 rounded-lg hover:bg-gradient-brand py-3 px-6 hover:text-bg-gray">
                  Sign Up
                </div>
              </button>{" "}
              {/* <a
                href={process.env.REACT_APP_CHROME_EXTENSION_LISTING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer shadow-1 z-10 w-40 border-[1.5px] border-gray-300 p-3 rounded-lg font-montserrat font-semibold text-gray-300 hover:bg-gradient-brand-gray hover:text-neutral-950 active:translate-y-[1px] active:translate-x-[1px]"
              >
                Download
              </a> */}
              <a
                href={process.env.REACT_APP_STRIPE_CUSTOMER_PORTAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer shadow-1 z-10 w-40 border-[1.5px] border-gray-300 p-3 rounded-lg font-montserrat font-semibold text-gray-300 hover:bg-gradient-brand-gray hover:text-neutral-950 active:translate-y-[1px] active:translate-x-[1px]"
              >
                My Account
              </a>
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
                className="shadow-1 z-10 w-40 border-[1.5px] border-gray-300 p-3 rounded-lg font-montserrat font-semibold text-gray-300 hover:bg-gradient-brand-gray hover:text-neutral-950 active:translate-y-[1px] active:translate-x-[1px]"
              >
                Contact Us
              </AnchorLink>
            </div>
          </motion.div>
        </div>
      ) : (
        // MOBILE VIEW================================================================
        <div className="w-full flex flex-col items-center justify-center gap-16 short-screen:gap-8">
          <div className="flex flex-col justify-center items-center gap-8  text-center text-lg text-gray-100 font-quest">
            <motion.div
              className="flex flex-col justify-center items-center gap-8 text-center text-base text-gray-100 font-quest"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="font-semibold landscape-mobile:text-sm se:text-sm">
                The <span className="text-gray-400">essential</span> browser
                extension for{" "}
                <a
                  href="https://www.tennistv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Tennis TV{" "}
                </a>{" "}
                and{" "}
                <a
                  href="https://www.tennischannel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Tennis Channel Plus
                </a>{" "}
                subscribers
              </p>
              <p className="landscape-mobile:hidden hidden ss:inline">
                Experience all of the action in a fraction of the time!
              </p>

              <p className="landscape-mobile:hidden hidden ss:inline">
                Full-length tennis matches condensed by AI
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            className="flex flex-col ss:flex-row  landscape-mobile:flex-row items-center gap-4 se:gap-3 py-4 text-center"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button
              onClick={() => setSigningUp(true)}
              className="z-10 w-40 the-one bg-gradient-to-r from-blue-500 to-teal-400 p-[1px] rounded-lg font-montserrat font-semibold text-gray-100 active:translate-y-[1px] active:translate-x-[1px]"
            >
              <div className="bg-neutral-950 hover:text-neutral-950 rounded-lg hover:bg-gradient-brand py-3 px-6 hover:text-bg-gray">
                Sign Up
              </div>
            </button>{" "}
            <a
              href={process.env.REACT_APP_STRIPE_CUSTOMER_PORTAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer shadow-1 z-10 w-40 border-[1.5px] border-gray-300 p-3 rounded-lg font-montserrat font-semibold text-gray-300 hover:bg-gradient-brand-gray hover:text-neutral-950 active:translate-y-[1px] active:translate-x-[1px]"
            >
              My Account
            </a>
            <AnchorLink
              onClick={() => setSelectedPage("contact")}
              href="#contact"
              className="shadow-1 z-10 w-40 border-[1.5px] border-gray-300 p-3 rounded-lg font-montserrat font-semibold text-gray-300 hover:bg-gradient-brand-gray hover:text-neutral-950 active:translate-y-[1px] active:translate-x-[1px]"
            >
              Contact Us
            </AnchorLink>
          </motion.div>
        </div>
      )}
      <SignUpDialog isOpen={signingUp} setIsOpen={setSigningUp} />
    </section>
  )
}

export default Landing
