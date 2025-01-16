import { Link } from "react-router-dom"
import AnchorLink from "react-anchor-link-smooth-scroll"
import coolEnglishLogo from "../assets/cool english logo.png"

const LogoLink = ({ selectedPage, setSelectedPage }) => {
  const isHomePage = window.location.pathname === "/"
  const lowerCasePage = "home"

  const LogoImage = () => (
    <img
      src={coolEnglishLogo}
      alt="Cool English Logo"
      className="h-12 sm:h-16 py-2"
    />
  )

  return isHomePage ? (
    // Smooth scroll anchor link for home page
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <LogoImage />
    </AnchorLink>
  ) : (
    // Regular Link component for other pages
    <Link
      to="/"
      onClick={() => {
        setSelectedPage("home")
        sessionStorage.setItem("selectedPage", "home")
      }}
    >
      <LogoImage />
    </Link>
  )
}

export default LogoLink
