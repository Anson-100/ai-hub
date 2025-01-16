import { useState, useEffect } from "react"
import FailureDialog from "./FailureDialog"
import { EnvURL } from "../services"
import SuccessDialog from "./SuccessDialog"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"

const SignUpDialog = ({ isOpen, setIsOpen }) => {
  const [animationClass, setAnimationClass] = useState("scale-0")
  const [isVisible, setIsVisible] = useState(false)

  // LOGIC FOR CLOSING DIALOG BY PRESSING ESCAPE KEY================================================================
  useEffect(() => {
    const handleEscapePress = event => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      setIsVisible(true)

      requestAnimationFrame(() => {
        setTimeout(() => {
          setAnimationClass("scale-100")
        }, 10)
      })

      // Add event listener for escape key
      document.addEventListener("keydown", handleEscapePress)
    } else {
      setAnimationClass("scale-0")
      setTimeout(() => {
        setIsVisible(false)
      }, 200)
    }

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("keydown", handleEscapePress)
    }
  }, [isOpen])

  // LOGIC FOR ANIMATION WHEN CLOSING/OPENING DIALOG================================================================
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)

      requestAnimationFrame(() => {
        // Timeout to trigger the animation after ensuring the element is visible
        setTimeout(() => {
          setAnimationClass("scale-100") // Apply scaling up
        }, 10) // Small delay to ensure transition
      })
    } else {
      setAnimationClass("scale-0") // Start scaling down
      // Delay hiding the dialog until the animation completes
      setTimeout(() => {
        setIsVisible(false)
      }, 200) // Match this duration to your animation duration
    }
  }, [isOpen])

  const handleDialogClick = e => {
    // Prevents the mouse down event from bubbling up to the backdrop div
    e.stopPropagation()
  }

  const [signUpError, setSignUpError] = useState(false)
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("")
  const [signUpSuccess, setSignUpSuccess] = useState(false)
  const [signUpSuccessMessage, setSignUpSuccessMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setSignUpErrorMessage("Your passwords do not match")
      setSignUpError(true)
    } else {
      // setSignUpSuccess(true);
      const credentials = btoa(`${formData.email}:${formData.password}`)
      let myHeaders = new Headers()
      myHeaders.append("Authorization", `Basic ${credentials}`)
      myHeaders.append("Content-Type", "application/json")

      let raw = JSON.stringify({
        email: formData.email,
        first: formData.firstName,
        last: formData.lastName,
      })

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      }
      setIsLoading(true)
      fetch(`${EnvURL.baseUrl}auth`, requestOptions)
        .then(response => {
          if (response.status === 403) {
            throw new Error("Forbidden")
          } else if (response.status === 404) {
            throw new Error("Exists")
          }
          return response.json()
        })
        .then(result => {
          if (result["Email"]["S"]) {
            let raw = JSON.stringify({
              email: formData.email,
            })
            var requestOptions = {
              method: "POST",
              redirect: "follow",
              body: raw,
            }

            fetch(
              `${process.env.REACT_APP_TENNIS_API_URL_TEMP}subscriptions`,
              requestOptions
            )
              .then(response => response.text())
              .then(url => {
                setIsLoading(false)
                window.location.href = url
              })
              .catch(error => {
                throw new Error("Unexpected Error")
              })
          } else {
            throw new Error("Forbidden")
          }
        })
        .catch(error => {
          setIsLoading(false)
          setSignUpSuccess(false)
          if (error.message === "Forbidden") {
            setSignUpErrorMessage(
              "There was an problem signing you up. Try refreshing the page and trying again."
            )
            setSignUpError(true)
          } else if (error.message === "Exists") {
            setSignUpErrorMessage(
              "There was an problem signing you up. The Email address you are using already exists."
            )
            setSignUpError(true)
          }
        })
    }
  }

  return (
    // DIMMED BACKGROUND WHEN DIALOG IS OPEN================================================================

    isVisible && (
      <div
        className="fixed inset-0 bg-zinc-950 bg-opacity-40 flex flex-col justify-center items-center z-50"
        onMouseDown={event => {
          // Only if the mouse down event is on the backdrop, close the dialog
          if (event.target === event.currentTarget) {
            setIsOpen(false)
          }
        }}
      >
        <div className="h-8 w-full bg-bg-dark"></div>
        {/* ACTUAL DIALOG BOX================================================================ */}
        <div
          className={`p-6  w-[22rem] sm:w-[28rem] h-96 landscape-mobile:h-80 sm:h-[28rem] rounded-lg relative transform transition-transform duration-200 ${animationClass} overflow-hidden`}
          onClick={handleDialogClick}
          style={{ transformOrigin: "center" }}
        >
          {/* <div className="animated-gradient"></div>{" "} */}
          <div className="absolute inset-0 rounded-md m-[2px] bg-bg-supporting p-8 landscape-mobile:p-4 sm:px-16 sm:pb-16 sm:pt-12 ">
            {isLoading && (
              <div className="flex items-center justify-center bg-pink-600 bg-opacity-20">
                {/* Placeholder for loading indicator */}
              </div>
            )}
            <h2 className="text-center text-lg landscape-mobile:text-sm font-quest pb-8 sm:pb-12 landscape-mobile:pb-4 text-text-primary">
              Welcome to Cool English!
            </h2>
            <form
              onSubmit={handleSubmit}
              className="gap-4 landscape-mobile:gap-3 font-quest flex flex-col"
            >
              <div className="relative">
                {" "}
                {/* Wrap email input and its toggle button */}
                <input
                  className="rounded-md text-gray-100 text-base landscape-mobile:text-sm w-full p-3 bg-bg-primary"
                  placeholder="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="relative">
                {/* Wrap password input */}
                <input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="rounded-md text-gray-100 text-base landscape-mobile:text-sm w-full p-3 bg-bg-primary"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {/* Toggle button for both password fields */}
                <button
                  type="button"
                  onClick={() => {
                    handleTogglePasswordVisibility()
                    handleToggleConfirmPasswordVisibility() // Toggle confirm password visibility too
                  }}
                  className="absolute inset-y-0 right-0 px-2 flex items-center"
                  style={{ zIndex: 10 }} // Ensure the toggle button is above the second input field
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-text-supporting" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-text-supporting" />
                  )}
                </button>
              </div>
              <div className="relative ">
                {" "}
                {/* Add margin-top to create space between the two input fields */}
                {/* Wrap confirm password input */}
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  className="rounded-md text-gray-100 text-base landscape-mobile:text-sm w-full p-3 bg-bg-primary"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="flex justify-center pt-6 landscape-mobile:pt-0">
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-bg-secondary text-text-primary border border-border-primary hover:bg-bg-dark"
                >
                  Sign Up!
                </button>
              </div>
            </form>
          </div>
        </div>
        <FailureDialog
          open={signUpError}
          setOpen={setSignUpError}
          primary={signUpErrorMessage}
        />
        <SuccessDialog
          open={signUpSuccess}
          setOpen={setSignUpSuccess}
          primary={signUpSuccessMessage}
        />
      </div>
    )
  )
}

export default SignUpDialog
