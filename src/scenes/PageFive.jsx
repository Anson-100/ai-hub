import React from "react"
import { motion } from "framer-motion"
import Dropdown from "../components/Dropdown"
import PageTile from "../components/PageTile"

import chatGPTIcon from "../assets/chatGPT-icon.svg"
import runwayIcon from "../assets/runway-icon.svg"
import pikaIcon from "../assets/pika-icon.svg"

const dropdownItems = [
  {
    id: "video1",
    question: "What is Video AI?",
    answer:
      "Video AI tools help create, edit, or enhance videos using artificial intelligence.",
  },
]

const PageFive = ({ setSelectedPage }) => {
  return (
    <section id="pagefive" className="min-h-[100svh] relative">
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
            <h1 className="text-xl ss:3xl md:text-3xl font-bold">Video AI</h1>
            <h2 className="text-base sm:text-lg se:text-sm font-semibold">
              Best for video creation and editing.
            </h2>
          </div>
        </motion.div>

        {/* DROPDOWN FAQ */}
        <Dropdown items={dropdownItems} setSelectedPage={setSelectedPage} />

        {/* BUTTONS */}
        <div className="w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col sm:flex-row items-center justify-center font-quest text-base md:text-lg sm:pt-16 gap-6 lg:gap-8 se:gap-4">
          <PageTile
            href="https://suno.ai"
            imgSrc={chatGPTIcon}
            altText="Sora AI Icon"
            title="Sora"
            description=""
          />
          <PageTile
            href="https://runwayml.com"
            imgSrc={runwayIcon}
            altText="Runway AI Icon"
            title="Runway"
            description=""
          />
          <PageTile
            href="https://pika.ai"
            imgSrc={pikaIcon}
            altText="Pika AI Icon"
            title="Pika"
            description=""
          />
        </div>
      </div>
    </section>
  )
}

export default PageFive
