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
    question: "What can Video AI do?",
    answer:
      "Video AI can help you create, edit, and enhance videos with little effort. It can generate clips from text, remove backgrounds, upscale video quality, and even automate editing. Whether you're making content for fun or for work, these tools make video creation faster and easier!",
  },
]

const PageFive = ({ setSelectedPage }) => {
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
              <h2 className="text-base sm:text-lg text-gray-400 se:text-sm font-semibold">
                Best for video creation and editing.
              </h2>
            </div>
          </motion.div>

          {/* DROPDOWN FAQ */}
          <Dropdown items={dropdownItems} setSelectedPage={setSelectedPage} />

          {/* BUTTONS */}
          <div className="w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col sm:flex-row items-center justify-center font-quest text-base md:text-lg sm:pt-16 gap-6 lg:gap-8 se:gap-4">
            <PageTile
              href="https://openai.com/sora"
              imgSrc={chatGPTIcon} // Make sure this is the correct icon for Sora
              altText="Sora AI Icon"
              title="Sora"
              contentKey="sora" // Added contentKey
            />

            <PageTile
              href="https://runwayml.com"
              imgSrc={runwayIcon}
              altText="Runway AI Icon"
              title="Runway"
              contentKey="runway" // Added contentKey
            />

            <PageTile
              href="https://pika.ai"
              imgSrc={pikaIcon}
              altText="Pika AI Icon"
              title="Pika"
              contentKey="pika" // Added contentKey
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default PageFive
