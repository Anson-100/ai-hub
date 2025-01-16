import { useState, useEffect, useRef } from "react"

import { Link, useLocation } from "react-router-dom"
import LinkDesktop from "../components/LinkDesktop"
import LinkMobile from "../components/LinkMobile"
import LogoLink from "../components/LogoLink"
import PageLinkDesktop from "../components/PageLinkDesktop"
import PageLinkMobile from "../components/PageLinkMobile"
import useMediaQuery from "../hooks/useMediaQuery"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import coolEnglishLogo from "../assets/cool english logo.png"

import {
  HomeIcon,
  QueueListIcon,
  QuestionMarkCircleIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  SpeakerWaveIcon,
  DocumentTextIcon,
  MusicalNoteIcon,
  VideoCameraIcon,
  HeartIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline"

// ======================================================================================
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 1260px)")
  const location = useLocation()
  const navbarBackground = isTopOfPage ? "" : ""

  const menuRef = useRef(null) // Add ref for the menu
  const buttonRef = useRef(null) // Add ref for the burger button

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isMenuToggled &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuToggled(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuToggled])

  return (
    <nav
      className={`${navbarBackground} z-30 w-full fixed top-0 bg-opacity-65 backdrop-blur-xl border-t-4 border-neutral-700 border-opacity-85`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 py-2">
        <LogoLink
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* DESKTOP NAV ===================================================================*/}
        {isDesktop ? (
          window.location.pathname === "/" ? (
            <div className="flex justify-between items-center gap-[.75rem] text-md font-quest bg-zinc-500 bg-opacity-15 backdrop-blur-xl p-2 rounded-md">
              {/* <LinkDesktop
                displayText="Home"
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />{" "}
              <div className="w-[1px] h-8 bg-zinc-400"></div> */}
              <LinkDesktop
                displayText="Chat AI"
                page="PageOne"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkDesktop
                displayText="Image AI"
                page="Instructions"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkDesktop
                displayText="Text ↔ Speech AI"
                page="Activities"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkDesktop
                displayText="Music AI"
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <LinkDesktop
                displayText="Video AI"
                page="PageFive"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <div className="w-[1px] h-6 bg-zinc-400"></div>
              <Link
                to="/inspiration" // Path to your Privacy Policy component
                onClick={() => {
                  setSelectedPage("inspiration") // Set the selected page
                  sessionStorage.setItem("selectedPage", "inspiration")
                }}
                className={`${
                  selectedPage === selectedPage
                    ? "text-gray-200"
                    : "text-gray-100"
                } py-3 px-4 flex hover:text-sky-400 text-lg text-text-supporting z-40 `} // Add flex and gap for icon alignment
              >
                Inspiration
              </Link>
              <Link
                to="/warning" // Path to your Privacy Policy component
                onClick={() => {
                  setSelectedPage("warning") // Set the selected page
                  sessionStorage.setItem("selectedPage", "warning")
                }}
                className={`${
                  selectedPage === selectedPage
                    ? "text-gray-200"
                    : "text-gray-100"
                } py-3 px-4 flex hover:text-orange-400 text-lg text-text-supporting z-40 border-[1px] border-zinc-500 rounded-sm border-dashed border-opacity-40 hover:border-orange-400`} // Add flex and gap for icon alignment
              >
                Warning!
              </Link>

              {/* <div className="w-[1px] h-8 bg-zinc-400"></div>
              <div className="hover:cursor-pointer text-text-supporting hover:text-text-primary py-3 px-4 flex items-center gap-2  hover:bg-box-bg rounded-md border-[1px] border-zinc-400">
                <a
                  href={process.env.REACT_APP_STRIPE_CUSTOMER_PORTAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </a>
              </div> */}
            </div>
          ) : (
            <PageLinkDesktop setSelectedPage={setSelectedPage} />
          )
        ) : // BURGER MENU=============================================================
        window.location.pathname === "/" ? (
          <button
            ref={buttonRef}
            className={`${isTopOfPage ? "" : ""} rounded-full p-4 z-50`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {!isMenuToggled ? (
              <Bars3Icon
                className={`${
                  isTopOfPage ? "text-text-secondary" : "text-text-secondary"
                } w-6`}
              />
            ) : (
              <XMarkIcon
                className={`${
                  isTopOfPage ? "text-text-secondary" : "text-text-secondary"
                } w-6`}
              />
            )}
          </button>
        ) : (
          <PageLinkMobile setSelectedPage={setSelectedPage} />
        )}

        {/* MOBILE MENU POPUP ================================================================================*/}
        {!isDesktop && isMenuToggled && (
          <div
            ref={menuRef}
            className="fixed w-[300px] landscape-mobile:w-auto landscape-mobile:pr-6 landscape-mobile:pl-1 se-mobile:pl-3 se-mobile:pr-5 rounded-md right-4 landscape-mobile:right-4 se-mobile:right-2 top-12 z-40 bg-neutral-700"
          >
            <div className="flex flex-col landscape-mobile:items-center gap-4 se-mobile:gap-2 text-lg font-quest w-full m-auto py-4 landscape-mobile:py-3 landscape-mobile:flex-row">
              <LinkMobile
                page="home"
                displayText="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={HomeIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <LinkMobile
                page="pageone"
                displayText="Chat AI"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={ChatBubbleLeftRightIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <LinkMobile
                page="instructions"
                displayText="Image AI"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={PhotoIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <LinkMobile
                page="activities"
                displayText="Text ↔ Speech AI"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={SpeakerWaveIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <LinkMobile
                page="testimonials"
                displayText="Music AI"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={MusicalNoteIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <LinkMobile
                page="pagefive"
                displayText="Video AI"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                Icon={VideoCameraIcon}
                toggleMenu={() => setIsMenuToggled(false)}
              />

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              {/* MOBILE PAGE LINKS============================================================ */}
              <Link
                to="/inspiration"
                onClick={() => {
                  setSelectedPage("inspiration")
                  sessionStorage.setItem("selectedPage", "inspiration")
                  setIsMenuToggled(false)
                }}
                className={`${
                  selectedPage === "inspiration"
                    ? "text-gray-400 landscape-mobile:text-gray-300 z-40"
                    : "text-gray-400 landscape-mobile:text-gray-300"
                } py-2 ml-4 se-mobile:ml-1 flex landscape-mobile:text-sm items-center`}
              >
                <HeartIcon className="h-6 w-6 mr-5 se-mobile:h-5 se-mobile:w-5 landscape-mobile:mr-3 se-mobile:mr-2 text-gray-400 landscape-mobile:text-gray-300" />
                Inspiration
              </Link>

              <div className="h-[1px] w-full bg-neutral-500 landscape-mobile:hidden"></div>
              <Link
                to="/warning"
                onClick={() => {
                  setSelectedPage("warning")
                  sessionStorage.setItem("selectedPage", "warning")
                  setIsMenuToggled(false)
                }}
                className={`${
                  selectedPage === "warning"
                    ? "text-gray-400 landscape-mobile:text-gray-300 z-40"
                    : "text-gray-400 landscape-mobile:text-gray-300"
                } py-2 ml-4 se-mobile:ml-1 flex landscape-mobile:text-sm items-center`}
              >
                <ExclamationTriangleIcon className="h-6 w-6 mr-5 se-mobile:h-5 se-mobile:w-5 landscape-mobile:mr-3 se-mobile:mr-2 text-gray-400 landscape-mobile:text-gray-300" />
                Warning!
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* black bar at bottom of navbar */}
      <div className="h-[1px] bg-neutral-600  lg:w-[85%] mx-auto"></div>{" "}
      {/* PROMOTIONAL MESSAGE======================================================================== */}
    </nav>
  )
}

export default Navbar
