import React, { useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Greeting from "../components/Greeting"

import JoinButton from "../buttons/JoinButton"
import coolEnglishLogo from "../assets/cool english logo.png"
import LandingTile from "../components/LandingTile"

import {
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  SpeakerWaveIcon,
  DocumentTextIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline"

import { RocketLaunchIcon } from "@heroicons/react/24/outline"

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
    <>
      {isAboveMd ? (
        <div className="relative bottom-0 right-0 w-full h-0">
          <div className="absolute top-0 -right-[10%] w-[40%] opacity-10 aspect-square rounded-full bg-gray-400 z-0" />
          <div className="absolute w-32 h-32 rounded-full bg-gray-400 opacity-10 top-[40rem] right-1/3" />
          <div className="absolute w-24 h-24 rounded-full bg-gray-400 opacity-10 top-8 right-1/4" />
          <div className="absolute w-40 h-40 rounded-full bg-gray-400 opacity-10 top-[32rem] right-1/3" />
          <div className="absolute w-20 h-20 rounded-full bg-gray-400 opacity-10 top-16 right-40" />
          <div className="absolute w-28 h-28 rounded-full bg-gray-400 opacity-10 top-32 right-[35%]" />
        </div>
      ) : (
        <div className="relative bottom-0 right-0 w-full h-0">
          <div className="absolute top-0 -right-[10%] w-[40%] aspect-square rounded-full opacity-10 bg-gray-400 z-0" />
          <div className="absolute w-24 h-24 rounded-full bg-gray-400 opacity-10 top-8 right-1/4" />
          <div className="absolute w-20 h-20 rounded-full bg-gray-400 opacity-10 top-16 right-10" />
          <div className="absolute w-20 h-20 rounded-full bg-gray-400 opacity-10 top-52 right-[-2rem]" />
        </div>
      )}

      <section
        id="home"
        className="w-full min-h-[100svh] relative overflow-hidden flex flex-col gap-12 sm:gap-16 xl:gap-32"
      >
        {/* HEADER================================================================ */}
        <div className="mx-auto font-montserrat text-left sm:text-center px-6 pt-28 sm:pt-36 xl:pt-40 flex flex-col gap-4 sm:gap-6 text-text-header sm:items-center ">
          <Greeting />
          <h2 className="text-4xl sm:text-[2.8rem] xl:text-[3rem] my-2 font-bold sm:w-2/3 mx-auto leading-tight">
            What are you trying to accomplish? AI can help!
          </h2>
          <p className="w-full sm:w-2/3 mx-auto sm:text-lg text-gray-300">
            AI can make your life easier but knowing what to use and how to use
            it can be overwhelming. Choose a category below to get started.
          </p>
        </div>

        {/* DESKTOP VIEW========================================================= */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center w-full px-6 mx-auto lg:w-5/6 justify-between pb-16">
          <LandingTile
            href="#pageone"
            icon={ChatBubbleLeftRightIcon}
            title="Chat AI"
            onClick={() => setSelectedPage("pageone")}
          />
          <LandingTile
            href="#instructions"
            icon={PhotoIcon}
            title="Image AI"
            onClick={() => setSelectedPage("instructions")}
          />
          <LandingTile
            href="#activities"
            icon={SpeakerWaveIcon}
            title="Text ↔ Speech AI"
            onClick={() => setSelectedPage("activities")}
          />
          <LandingTile
            href="#testimonials"
            icon={MusicalNoteIcon}
            title="Music AI"
            onClick={() => setSelectedPage("testimonials")}
          />
          <LandingTile
            href="#pagefive"
            icon={VideoCameraIcon}
            title="Video AI"
            onClick={() => setSelectedPage("pagefive")}
          />
        </div>
      </section>
    </>
  )
}

export default Landing
