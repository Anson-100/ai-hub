import AnchorLink from "react-anchor-link-smooth-scroll"

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-teal-400 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-teal-400 before:left-[-50%] before:top-[-50%]`
  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home"
            ? selectedStyles
            : "bg-neutral-700 hover:bg-teal-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#demo"
        className={`${
          selectedPage === "demo"
            ? selectedStyles
            : "bg-neutral-700 hover:bg-teal-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("demo")}
      />
      <AnchorLink
        href="#instructions"
        className={`${
          selectedPage === "instructions"
            ? selectedStyles
            : "bg-neutral-700 hover:bg-teal-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("instructions")}
      />
      <AnchorLink
        href="#faq"
        className={`${
          selectedPage === "faq"
            ? selectedStyles
            : "bg-neutral-700 hover:bg-teal-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("faq")}
      />
      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact"
            ? selectedStyles
            : "bg-neutral-700 hover:bg-teal-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  )
}

export default DotGroup
