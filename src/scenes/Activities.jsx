import React, { useState } from "react"
import { motion } from "framer-motion"
import Dropdown from "../components/Dropdown"
import PageTile from "../components/PageTile"

import elevenLabsIcon from "../assets/elevenlabs-icon.svg"
import murfIcon from "../assets/murf-icon.svg"
import playhtIcon from "../assets/playht-icon.svg"

const dropdownItems = [
  {
    id: "textSpeech1",
    question: "What is Text ↔ Speech AI? Is it really as simple as it sounds?",
    answer: "Absolutely!",
  },
]

const Activities = ({ setSelectedPage }) => {
  return (
    <section id="activities" className="min-h-[100svh] relative">
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
              Text ↔ Speech AI
            </h1>
            <h2 className="text-base sm:text-lg se:text-sm font-semibold">
              Best for converting text to speech or vice versa
            </h2>
          </div>
        </motion.div>

        {/* DROPDOWN FAQ */}
        <Dropdown items={dropdownItems} setSelectedPage={setSelectedPage} />

        {/* BUTTONS */}
        <div className="w-5/6 lg:w-4/6 xl:w-3/6 flex flex-col sm:flex-row items-center justify-center font-quest text-base md:text-lg sm:pt-16 gap-6 lg:gap-8 se:gap-4">
          <PageTile
            href="https://elevenlabs.io"
            imgSrc={elevenLabsIcon}
            altText="ElevenLabs Icon"
            title="ElevenLabs"
            description=""
          />
          <PageTile
            href="https://murf.ai"
            imgSrc={murfIcon}
            altText="Murf AI Icon"
            title="Murf"
            description=""
          />
          <PageTile
            href="https://play.ht"
            imgSrc={playhtIcon}
            altText="Play.ht Icon"
            title="Play.ht"
            description=""
          />
        </div>
      </div>
    </section>
  )
}

export default Activities
