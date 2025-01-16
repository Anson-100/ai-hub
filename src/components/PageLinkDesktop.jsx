// src/components/PageLinkDesktop.jsx
import { Link } from "react-router-dom"

const PageLinkDesktop = ({ page, setSelectedPage }) => {
  const lowerCasePage = page ? page.toLowerCase().replaceAll(" ", "") : ""
  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(page ? lowerCasePage : "Home")
        sessionStorage.setItem("selectedPage", lowerCasePage)
      }}
      className={`font-quest py-3  px-4 flex hover:text-sky-400 text-lg text-text-content z-40 `}
    >
      {page ? page : "Home"}
    </Link>
  )
}

export default PageLinkDesktop
