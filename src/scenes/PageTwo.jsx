import React from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import Dropdown from "../components/Dropdown"
import PageTile from "../components/PageTile"

import dalleIcon from "../assets/dalle-icon.svg"
import midjourneyIcon from "../assets/midjourney-icon.svg"
import ideogramIcon from "../assets/ideogram-icon.jpeg"

const dropdownItems = [
  {
    id: "image1",
    question: "What is Image AI, and what can it do?",
    answer:
      "Image AI refers to AI tools designed to generate or edit images. They can create art, design graphics, enhance photos, and more. They're powerful tools for artists, marketers, and hobbyists.",
  },
]

const PageTwo = ({ setSelectedPage }) => {
  return (
    <>
      <div className="relative bottom-0 right-0 w-full h-0">
        {" "}
        {/* h-0 prevents taking up space */}
        <div className="absolute top-0 -right-1/4 w-[40%] aspect-square rounded-full bg-gray-200 opacity-5 z-0" />
        <div className="absolute w-32 h-32 rounded-full bg-gray-200 opacity-5 top-1/2 -right-8" />
        <div className="absolute w-24 h-24 rounded-full bg-gray-200 opacity-5 top-16 right-48" />
        <div className="absolute w-40 h-40 rounded-full bg-gray-200 opacity-5 top-64 right-16" />
        <div className="absolute w-20 h-20 rounded-full bg-gray-200 opacity-5 top-32 right-64" />
        <div className="absolute w-28 h-28 rounded-full bg-gray-200 opacity-5 top-1/2 right-40" />
      </div>

      <section id="pagetwo" className="min-h-[100svh] relative">
        <div className="w-full flex flex-col items-center py-10 sm:py-16">
          {/* HEADER */}
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
                Image AI (aka image generators)
              </h1>
              <h2 className="text-base sm:text-lg text-gray-400 se:text-sm font-semibold">
                The only limit is your imagination!
              </h2>
            </div>
          </motion.div>

          {/* DROPDOWN FAQ */}
          <Dropdown items={dropdownItems} setSelectedPage={setSelectedPage} />

          {/* BUTTONS */}
          <div className="w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col sm:flex-row items-center justify-center font-quest text-base md:text-lg sm:pt-16 gap-6 lg:gap-8 se:gap-4">
            <PageTile
              href="https://www.midjourney.com"
              imgSrc={midjourneyIcon}
              altText="Midjourney Icon"
              title="Midjourney"
              contentKey="midjourney" // Added contentKey
            />

            <PageTile
              href="https://labs.openai.com"
              imgSrc={dalleIcon}
              altText="DALL-E Icon"
              title="DALL-E"
              contentKey="dalle" // Added contentKey
            />

            <PageTile
              href="https://ideogram.ai"
              imgSrc={ideogramIcon}
              altText="Ideogram AI Icon"
              title="Ideogram"
              contentKey="ideogram" // Added contentKey
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PageTwo
