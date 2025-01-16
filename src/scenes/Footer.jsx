import AnchorLink from "react-anchor-link-smooth-scroll"
import coolEnglishLogo from "../assets/cool english logo.png"
import spotifyIcon from "../assets/spotify-icon.png"
import applePodcastIcon from "../assets/apple-podcast-icon.png"
import PageLinkDesktop from "../components/PageLinkDesktop"
import { Link, useLocation } from "react-router-dom"
// SOCIAL MEDIA ICONS===========================
import IconFB from "../assets/IconFB.svg"
import IconInsta from "../assets/IconInsta.svg"
import IconTikTok from "../assets/IconTikTok.svg"
import IconYT from "../assets/IconYT.svg"

const Footer = ({ selectedPage, setSelectedPage }) => {
  return (
    <footer className="text-gray-200 pt-8">
      {" "}
      {/* Added flex, items-center, and justify-center to vertically center content */}
      <div className="flex flex-col h-full items-center justify-center text-center gap-8 w-full bg-slate-950">
        {" "}
        {/* BACK TO TOP================================================================== */}
        <AnchorLink
          onClick={() => setSelectedPage("home")}
          href="#home"
          className="z-10 w-full bg-slate-800 hover:bg-bg-dark font-montserrat py-2 sm:py-3"
        >
          back to top
        </AnchorLink>
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-20">
          <div className="flex flex-col gap-8">
            <img
              src={coolEnglishLogo}
              alt="cool english logo"
              className="h-20 mx-auto"
            />
            {/* SOCIAL MEDIA LINKS======================================= */}
            {/* <div className="flex items-center gap-8 justify-center pb-4 sm:pb-0">
              <a
                href="https://www.instagram.com/coolenglish_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={IconInsta} alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/coolenglishdotnet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={IconFB} alt="Facebook" className="w-8 h-8" />
              </a>
              <a
                href="https://www.facebook.com/coolenglishdotnet/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={IconYT} alt="YouTube" className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@coolenglish.net?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={IconTikTok} alt="TikTok" className="w-8 h-8" />
              </a>
            </div> */}
          </div>
          {/* <div className="hidden sm:block sm:h-16 sm:w-[1px] bg-border-supporting"></div> */}
          {/* BUTTONS========================================= */}
          {/* <div className="flex flex-col gap-4">
            <a
              href="https://open.spotify.com/show/6RKpJy0S9Mgk4Vpg692GqO?si=NuyKnK9VT8O8Y5ijdpYLKA&dl_branch=1&nd=1&dlsi=348422922b8e474b"
              target="_blank"
              rel="noopener noreferrer"
              className="font-quest flex items-center py-2 gap-2 text-text-supporting bg-bg-supporting hover:bg-bg-dark justify-center px-6 rounded-lg"
            >
              <img src={spotifyIcon} alt="spotify icon" className="h-4" />
              <p>Listen on Spotify</p>
            </a>
            <a
              href="https://podcasts.apple.com/br/podcast/cool-english/id1498262557"
              target="_blank"
              rel="noopener noreferrer"
              className="font-quest flex j items-center py-2 gap-2 text-text-supporting bg-bg-supporting hover:bg-bg-dark justify-center px-6 rounded-lg"
            >
              <img src={applePodcastIcon} alt="spotify icon" className="h-4" />
              <p>Listen on Apple Podcasts</p>
            </a>
            <Link
              to="/privacy-policy" // Path to your Privacy Policy component
              onClick={() => {
                setSelectedPage("privacy-policy") // Set the selected page
                sessionStorage.setItem("selectedPage", "privacy-policy")
              }}
              className="font-quest text-text-supporting py-2 px-6 bg-bg-supporting hover:bg-bg-dark rounded-lg" // Add flex and gap for icon alignment
            >
              Privacy Policy
            </Link>
          </div> */}
        </div>
        <p className="font-quest text-sm sm:text-base text-text-secondary pb-2">
          ©2025 AI Hub. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
