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
        {/* MODAL CONTENT (Fixed height and scrollable content) */}
        <div
          className={`dialog-box rounded-lg max-h-[95%] p-8 mx-2 md:mx-16 w-auto max-w-2xl relative bg-white transition-all duration-300 ease-out transform 
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          onClick={e => e.stopPropagation()}
          style={{ cursor: "default" }}
        >
          <div className="h-4 w-[calc(100%+2px)] bg-gray-500 absolute -top-[1px] -left-[1px] rounded-t-lg"></div>
          <div className="w-full h-8 fixed top-4 left-0 bg-gradient-to-b from-gray-800 via-gray-800/90 to-transparent sm:hidden"></div>

          {/* SCROLLABLE CONTENT */}
          <div className="max-h-[70vh] overflow-y-auto pb-8 sm:pb-6 pr-2 sm:pr-0 ">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-sky-400 mt-4">
              {content?.title || "No Title Available"}
            </h2>

            {/* Intro Section */}
            <p className="text-lg md:text-xl mb-6 text-text-supporting">
              {content?.intro || "No Intro Available"}
            </p>

            {/* QUESTIONS SECTION */}
            <div className="space-y-6 text-supporting">
              {[1, 2, 3].map(num => (
                <div key={num}>
                  <h3 className="text-lg md:text-xl text-sky-300 mb-2">
                    {content?.[`question${num}Title`] || `Question ${num}`}
                  </h3>
                  <p className="text-lg text-text-supporting">
                    {content?.[`question${num}Body`] || "Answer not available."}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-16 fixed bottom-[4.5rem] left-0 bg-gradient-to-t from-gray-800 via-gray-800/90 to-transparent sm:hidden"></div>

          {/* STICKY BUTTONS */}
          <div className="sticky bottom-8 left-0 w-full pt-4 flex justify-center md:justify-end gap-4">
            <button
              className="border border-border-secondary text-white px-8 py-2 rounded-lg hover:bg-box-bg transition duration-100"
              onClick={onClose}
            >
              Close
            </button>
            {content?.link && (
              <a
                href={content.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-100"
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
