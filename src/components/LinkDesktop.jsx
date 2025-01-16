import AnchorLink from "react-anchor-link-smooth-scroll"

const LinkDesktop = ({ page, selectedPage, setSelectedPage, displayText }) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? " text-sky-400 z-40 "
          : "font-quest py-3  px-4 flex hover:text-sky-400 text-lg text-text-supporting z-40 "
      } text-lg py-3 px-4`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {displayText}
    </AnchorLink>
  )
}

export default LinkDesktop
