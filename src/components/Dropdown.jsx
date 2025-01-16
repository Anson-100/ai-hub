import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDownIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/solid"

const Dropdown = ({ items, setSelectedPage }) => {
  const [isOpen, setIsOpen] = useState({})

  const toggleOpen = id => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }))
  }

  return (
    <div className="w-5/6 sm:w-4/6 lg:w-3/6 h-full flex flex-col gap-4 font-quest text-gray-200 text-base md:text-lg z-10 pb-8">
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
        <div className="flex flex-col w-full h-full">
          <div className="w-full h-[1px] bg-neutral-600"></div>

          {items.map(item => (
            <div key={item.id}>
              <button
                onClick={() => toggleOpen(item.id)}
                className="flex items-center justify-between w-full text-left text-text-supporting px-2 py-4"
              >
                <span
                  className={`${
                    isOpen[item.id]
                      ? "text-text-supporting"
                      : "text-text-content"
                  } transition-all duration-200`}
                >
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-5 h-5">
                  {isOpen[item.id] ? (
                    <ChevronDoubleDownIcon className="w-full h-full" />
                  ) : (
                    <ChevronDownIcon className="w-full h-full" />
                  )}
                </div>
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
                  >
                    <p className="pb-4 pl-4 px-2 text-text-content">
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
  )
}

export default Dropdown
