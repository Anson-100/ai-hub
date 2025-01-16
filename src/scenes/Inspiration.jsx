import React, { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"
import { motion, AnimatePresence } from "framer-motion"

// =======================================================================================
const Inspiration = () => {
  const [isOpen, setIsOpen] = useState({})

  const toggleOpen = id => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  // Example FAQ items
  const PolicyItems = [
    {
      id: "policy1",
      question: "Chat AI Stuff",
      answer:
        "Welcome to the Servomancer Browser Extension! Your privacy matters to us. This Privacy Policy explains how we handle your data when you use our extension. Please take a moment to review it to understand how we treat your information.",
    },
    {
      id: "policy2",
      question: "Image AI Stuff",
      answer: () => (
        <span>
          Enjoy an enhanced tennis viewing experience with our Extension! It's
          exclusively tailored for{" "}
          <a
            className="hover:underline text-blue-400"
            href="http://www.tennistv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.tennistv.com
          </a>{" "}
          and{" "}
          <a
            className="hover:underline text-blue-400"
            href="http://www.tennischannel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.tennischannel.com
          </a>
          , activating only when you visit these sites. Rest assured, we don't
          gather any personal info or user data through the Extension. Your
          browsing habits, preferences, and activities outside of these sites
          remain completely private and untouched.
        </span>
      ),
    },
    {
      id: "policy3",
      question: "Speech/Text AI Stuff ",
      answer:
        "Our Extension may save a single authentication token in your browser's local storage. This token ensures smooth access to specific features or services. It's securely stored on your device and isn't shared with any external servers or third parties.",
    },
    {
      id: "policy4",
      question: "Music AI Stuff",
      answer: () => (
        <span>
          Our Extension doesn't link to third-party websites. This Privacy
          Policy covers your use of the Extension on{" "}
          <a
            className="hover:underline text-blue-400"
            href="http://www.tennistv.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.tennistv.com
          </a>{" "}
          or{" "}
          <a
            className="hover:underline text-blue-400"
            href="http://www.tennischannel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.tennischannel.com
          </a>
          . While using our Extension, we're not responsible for the content or
          practices of any third-party sites you may visit through external
          links.
        </span>
      ),
    },

    {
      id: "policy5",
      question: "Video AI Stuff",
      answer:
        "We might make changes to this Privacy Policy occasionally. Don't worry, any updates will be posted here, with the effective date adjusted accordingly. Feel free to check back here every now and then for any changes.",
    },
  ]

  const isAboveMd = useMediaQuery("(min-width: 1060px)")

  return (
    <section
      id="policy"
      className="flex flex-col items-center min-h-[100svh] py-16 w-5/6 md:w-3/4 lg:w-2/3 mx-auto"
    >
      <motion.div
        className="xs:pt-6 pt-6 pb-10 md:py-16 landscape-mobile:pb-2 font-montserrat text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        {/* HEADER================================================================================================ */}
        <h1 className="mx-auto text-2xl md:text-3xl text-gray-200 font-semibold p-4 ">
          Inspiration
        </h1>
        <h2 className="text-gray-300">Check out these cool ideas</h2>
      </motion.div>
      {/* CONTENT================================================================================================ */}

      <div className="w-full h-full flex flex-col gap-4 font-quest text-gray-200 text-base md:text-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div id="faq" className="flex flex-col w-full h-full">
            <div className="w-full h-[1px] bg-neutral-600"></div>

            {PolicyItems.map(item => (
              <div key={item.id} className="">
                <button
                  onClick={() => toggleOpen(item.id)}
                  className="flex items-center justify-between w-full text-left px-2 py-4 "
                >
                  <span
                    className={`${
                      isOpen[item.id] ? "text-gray-400" : "text-gray-200"
                    } transition-all duration-200`}
                  >
                    {item.question}
                  </span>
                  {isOpen[item.id] ? (
                    <ChevronDoubleDownIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen[item.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: { opacity: { duration: 0.1 } },
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className=""
                    >
                      <p className="pb-4 pl-4 px-2">
                        {typeof item.answer === "function"
                          ? item.answer()
                          : item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="w-full h-[1px] bg-neutral-600"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Inspiration
