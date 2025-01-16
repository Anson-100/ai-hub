import React, { useEffect } from "react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { dialogContent } from "../modules/dialogContent"

const LearnMore = ({ isOpen, onClose, contentKey }) => {
  const content = dialogContent[contentKey] // Retrieve content using the provided key

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => (document.body.style.overflow = "auto")
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* DIMMED BACKGROUND */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center 
        transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        style={{ cursor: "default" }}
      >
        {/* MODAL CONTENT (Supports 3 Questions Layout) */}
        <div
          className={`dialog-box rounded-lg p-8 mx-2 md:mx-16 w-auto max-w-2xl relative bg-white transition-all duration-300 ease-out transform 
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          onClick={e => e.stopPropagation()}
          style={{ cursor: "default" }}
        >
          <div className="h-4 w-[calc(100%+2px)] bg-gray-500 absolute -top-[1px] -left-[1px] rounded-t-lg"></div>
          {/* Title Section */}
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-sky-400 mt-4">
            {content?.title || "No Title Available"}
          </h2>

          {/* Intro Section */}
          <p className="text-lg md:text-xl mb-6 text-text-supporting">
            {content?.intro || "No Intro Available"}
          </p>

          {/* QUESTIONS SECTION (Three Key Questions Layout) */}
          <div className="space-y-6 text-supporting">
            {/* Question 1 */}
            <div>
              <h3 className="text-lg md:text-xl text-sky-300 mb-2">
                {content?.question1Title || "Question 1"}
              </h3>
              <p className="text-lg text-text-supporting">
                {content?.question1Body || "Answer not available."}
              </p>
            </div>

            {/* Question 2 */}
            <div>
              <h3 className="text-lg md:text-xl text-sky-300 mb-2">
                {content?.question2Title || "Question 2"}
              </h3>
              <p className="text-lg text-text-supporting">
                {content?.question2Body || "Answer not available."}
              </p>
            </div>

            {/* Question 3 */}
            <div>
              <h3 className="text-lg md:text-xl text-sky-300 mb-2">
                {content?.question3Title || "Question 3"}
              </h3>
              <p className="text-lg text-text-supporting">
                {content?.question3Body || "Answer not available."}
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-end mt-8">
            <button
              className="inline-block border-[1px] border-border-secondary text-white px-8 py-2 rounded-lg hover:bg-box-bg transition duration-100"
              onClick={onClose}
            >
              Close
            </button>
            {content?.link && (
              <a
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-100"
              >
                Go to Site ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default LearnMore
