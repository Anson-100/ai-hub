import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

const LandingTile = ({ href, icon: Icon, title, onClick }) => {
  return (
    <AnchorLink
      onClick={onClick}
      href={href}
      className="group button-shadow flex sm:flex-col gap-2 justify-center sm:justify-between items-center rounded-md p-4 sm:p-8 font-quest w-full sm:w-1/5  sm:h-52"
    >
      <Icon className="h-8 sm:h-20 text-icon group-hover:text-icon-hover " />
      <h3 className="text-text-content text-lg sm:text-xl group-hover:text-text-hover">
        {title}
      </h3>
    </AnchorLink>
  )
}

export default LandingTile
