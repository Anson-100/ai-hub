import { useEffect } from "react"
import Header from "../components/header"

const SuccessDialog = ({ open, setOpen, primary, subtitle, description }) => {
  // Handler for when the backdrop is clicked
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setOpen(false)
    }
  }

  // Prevents closing when clicking inside the dialog
  const handleDialogClick = event => {
    event.stopPropagation()
  }

  // Handles the escape key press event
  const handleEscapePress = event => {
    if (event.key === "Escape") {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      // Add event listener for escape key when the dialog is open
      document.addEventListener("keydown", handleEscapePress)
    }

    // Cleanup the event listener when the dialog is closed or component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscapePress)
    }
  }, [open]) // Only re-run if open state changes

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-neutral-950 bg-opacity-50"
          onMouseDown={handleBackdropClick}
        >
          <div
            className="w-auto max-w-md h-auto rounded-lg bg-neutral-300 border-[1px] border-neutral-950 font-quest"
            onMouseDown={handleDialogClick}
          >
            <div className="container mx-auto p-8">
              <Header
                primary={primary}
                subtitle={subtitle}
                description={description}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SuccessDialog
