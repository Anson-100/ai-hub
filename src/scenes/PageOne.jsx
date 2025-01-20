import React, { useState } from "react"

import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import Dropdown from "../components/Dropdown"

import PageTile from "../components/PageTile"

import chatGPTIcon from "../assets/chatGPT-icon.svg"
import claudeIcon from "../assets/claude-icon.svg"
import geminiIcon from "../assets/gemini-icon.svg"

import BubbleAnimation from "../components/BubbleAnimation"
import AnchorLink from "react-anchor-link-smooth-scroll"

const dropdownItems = [
  {
    id: "chat1",
    question:
      "Which one of these chatbots should I use? Are there other options out there?",
    answer:
      "You’re only a few clicks away from trying any of them, and honestly, they’re all great at what they do! Each chatbot has its own strengths, but the best way to find the right one is to just test them out. There are other options out there too, but these are the most popular and widely used. Whichever you pick, you'll be in good hands!",
  },
]

const PageOne = ({ setSelectedPage }) => {
  const isAboveMd = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <div className="relative bottom-0 left-0 w-full h-0">
        {" "}
        {/* h-0 prevents taking up space */}
        <div className="absolute top-0 -left-1/4 w-[40%] aspect-square rounded-full bg-gray-200 opacity-5 z-0" />
        <div className="absolute w-32 h-32 rounded-full bg-gray-200 opacity-5 top-1/2 -left-8" />
        <div className="absolute w-24 h-24 rounded-full bg-gray-200 opacity-5 top-16 left-48" />
        <div className="absolute w-40 h-40 rounded-full bg-gray-200 opacity-5 top-64 left-16" />
        <div className="absolute w-20 h-20 rounded-full bg-gray-200 opacity-5 top-32 left-64" />
        <div className="absolute w-28 h-28 rounded-full bg-gray-200 opacity-5 top-1/2 left-40" />
      </div>

      <section id="pageone" className=" min-h-[100svh] relative">
        <div className="w-full flex flex-col items-center py-10 sm:py-16">
          {/* HEADER================================================================ */}
          <motion.div
            className="z-20 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <div className="text-left text-text-header font-montserrat sm:text-center pt-16 pb-8 md:pb-16 flex flex-col gap-2 w-5/6 mx-auto">
              <h1 className="text-xl ss:3xl md:text-3xl font-bold">
                Chat AI (aka chatbots)
              </h1>
              <h2 className="text-base text-gray-400 sm:text-lg se:text-sm font-semibold">
                Best for most people in most situations
              </h2>
            </div>
          </motion.div>
          <Dropdown items={dropdownItems} setSelectedPage={setSelectedPage} />

          {/*CONTENT: DESKTOP VIEW================================================================ */}

          <div className="w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col sm:flex-row items-center justify-center font-quest text-base md:text-lg sm:pt-16 gap-6 lg:gap-8 se:gap-4">
            <PageTile
              href="https://chat.openai.com"
              imgSrc={chatGPTIcon}
              altText="ChatGPT Icon"
              title="ChatGPT"
              contentKey="chatGPT" // Added contentKey prop
            />

            <PageTile
              href="https://claude.ai"
              imgSrc={claudeIcon}
              altText="Claude AI Icon"
              title="Claude"
              contentKey="claude" // Added contentKey prop
            />

            <PageTile
              href="https://gemini.google.com"
              imgSrc={geminiIcon}
              altText="Gemini AI Icon"
              title="Gemini"
              contentKey="gemini" // Added contentKey prop
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PageOne
