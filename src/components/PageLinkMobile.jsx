// src/components/PageLinkMobile.jsx
import { Link } from "react-router-dom"

const PageLinkMobile = ({ page, setSelectedPage }) => {
  const lowerCasePage = page ? page.toLowerCase().replaceAll(" ", "") : ""
  return (
    <Link
      to={`/${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(page ? lowerCasePage : "Home")
        sessionStorage.setItem("selectedPage", lowerCasePage)
      }}
      className="text-text-supporting hover:text-text-primary font-quest text-md"
    >
      {page ? page : "Home"}
    </Link>
  )
}

export default PageLinkMobile
