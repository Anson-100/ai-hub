import { motion } from "framer-motion"
import useMediaQuery from "../hooks/useMediaQuery"

const Contact = () => {
  const isAboveSm = useMediaQuery("(min-width: 768px)")
  const isLandscapeMobile = useMediaQuery(
    "(max-height: 440px) and (orientation: landscape)"
  )

  const onSubmit = e => {
    // If the form is valid, it will continue to submit
    console.log("Form submission", e)
  }

  return (
    <>
      <div className="relative bottom-0 right-0 w-full h-0">
        {" "}
        {/* h-0 prevents taking up space */}
        <div className="absolute top-0 -right-1/4 w-[40%] aspect-square rounded-full bg-bg-dark z-0" />
        <div className="absolute w-32 h-32 rounded-full bg-bg-dark opacity-70 top-1/2 -right-8" />
        <div className="absolute w-24 h-24 rounded-full bg-bg-dark opacity-50 top-16 right-48" />
        <div className="absolute w-40 h-40 rounded-full bg-bg-dark opacity-60 top-64 right-16" />
        <div className="absolute w-20 h-20 rounded-full bg-bg-dark opacity-80 top-32 right-64" />
        <div className="absolute w-28 h-28 rounded-full bg-bg-dark opacity-40 top-1/2 right-40" />
      </div>
      <section
        id="contact"
        className="flex flex-col items-center justify-center landscape-mobile:justify-start min-h-[100vh] py-16  ss:pt-20 landscape-mobile:pt-16 short-screen:pt-24 sm:pt-16 landscape-mobile:py-4 w-5/6 mx-auto"
      >
        <div className="flex flex-col md:flex-row w-full h-full gap-4 landscape-mobile:gap-0 sm:gap-8">
          {/* HEADER */}
          <div className="my-auto md:w-1/2 z-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <h1 className="mx-auto text-center text-xl md:text-3xl font-montserrat text-text-primary font-semibold pb-8 se-mobile:pb-2 landscape-mobile:pb-4 ss:pb-4 sm:pb-8  sm:text-left landscape-mobile:text-left xs:pt-6">
                Contact Us
              </h1>

              {isAboveSm && (
                <div>
                  <h3 className="w-3/4 text-text-secondary font-quest sm:text-base md:text-lg landscape-mobile:hidden">
                    Feel free to contact us with business inquiries, feedback,
                    or any issues you may have. We look forward to hearing from
                    you!
                  </h3>
                </div>
              )}
            </motion.div>
          </div>

          {/* FORMS */}
          <div className="font-quest relative w-full md:w-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-full landscape-mobile:w-full my-auto"
            >
              <form
                onSubmit={onSubmit}
                action={process.env.REACT_APP_FORM_SUBMIT_URL}
                method="POST"
                noValidate={false}
                className="flex flex-col w-full md:ml-auto z-10 gap-3"
              >
                <div className="landscape-mobile:flex-row flex flex-col sm:flex-row md:flex-col gap-3">
                  <input
                    className="rounded-md text-text-primary text-base md:text-lg w-full p-3 landscape-mobile:p-2 bg-bg-primary border-border-primary border-[1.5px] hover:border-border-supporting se-mobile:text-sm"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    maxLength="100"
                  />
                  <input
                    className="rounded-md text-text-primary text-base md:text-lg w-full p-3 landscape-mobile:p-2 bg-bg-primary border-border-primary border-[1.5px] hover:border-border-supporting se-mobile:text-sm"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                    pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
                  />
                </div>

                <textarea
                  className="rounded-md text-text-primary text-base md:text-lg w-full p-3 landscape-mobile:p-2 bg-bg-primary focus:bg-bg-secondary border-border-primary border-[1.5px] hover:border-border-supporting se-mobile:text-sm"
                  name="message"
                  placeholder="Your Message"
                  rows={isLandscapeMobile ? 3 : 5}
                  required
                  maxLength="2000"
                />
                <button
                  type="submit"
                  className="w-full md:w-72 px-6 py-6 rounded-lg bg-bg-supporting text-text-primary border border-border-primary hover:bg-bg-dark"
                >
                  Send Us a Message!
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
