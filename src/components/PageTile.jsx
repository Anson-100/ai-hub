import { useState } from "react"
import { ArrowUpRightIcon } from "@heroicons/react/24/outline"
import LearnMore from "./LearnMore" // Importing the modal component

const PageTile = ({ href, imgSrc, altText, title, contentKey }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="group flex flex-col rounded-md se:p-2 items-center font-quest w-full sm:w-1/3 text-text-content">
      {/* IMAGE AND TITLE */}
      <div className="tile-shadow w-full flex flex-col items-center rounded-t-md gap-2 py-6 px-12">
        <img
          src={imgSrc}
          className="h-6 sm:h-20 md:h-20 grayscale"
          alt={altText}
        />
        <h3 className="text-text-content text-lg">{title}</h3>
      </div>

      {/* BUTTONS */}
      <div className="flex w-full">
        {/* Learn More Button - Opens Modal */}
        <button
          onClick={() => setModalOpen(true)}
          className="button-shadow flex justify-center gap-2 items-center text-center rounded-bl-md p-3 w-1/2"
        >
          <p>Learn More</p>
        </button>

        {/* Go to Site Button */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="button-shadow rounded-br-md p-3 w-1/2"
        >
          <div className="flex justify-center gap-2 items-center text-center">
            <p>Go to Site</p>
            <ArrowUpRightIcon className="w-5" />
          </div>
        </a>
      </div>

      {/* LearnMore Modal - Now Passing contentKey */}
      <LearnMore
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        contentKey={contentKey} // Fixed here!
      />
    </div>
  )
}

export default PageTile
