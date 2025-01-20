import AnchorLink from "react-anchor-link-smooth-scroll"
import { useMemo } from "react"

const LinkDesktop = ({
  page,
  selectedPage,
  setSelectedPage,
  displayText,
  Icon,
}) => {
  const lowerCasePage = page.toLowerCase()

  // Memoize the Icon to prevent unnecessary re-renders
  const PageIcon = useMemo(() => (Icon ? Icon : null), [Icon])

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-sky-400 z-40"
          : "font-quest py-3 px-4 hover:text-sky-400 text-lg text-text-supporting z-40"
      } text-lg py-5 px-5 flex items-center gap-4 hover:bg-zinc-900 hover:bg-opacity-60`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {PageIcon && <PageIcon className="h-6 w-6" />}
      {displayText}
    </AnchorLink>
  )
}

export default LinkDesktop
