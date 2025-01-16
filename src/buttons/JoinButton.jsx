import React from "react"

const JoinButton = ({
  href = "https://www.coolenglish.net/auth",
  className = "",
  children = "Join Now",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-48 md:px-6 text-center py-3 rounded-lg bg-bg-supporting text-text-primary border border-border-primary hover:bg-bg-dark font-quest"
    >
      {children}
    </a>
  )
}

export default JoinButton
