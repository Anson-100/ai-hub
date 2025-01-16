import { useState } from "react"

const BubbleAnimation = ({ children, className }) => {
  const [circles, setCircles] = useState([])

  const createCircle = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newCircle = {
      id: Date.now(),
      x,
      y,
      size: Math.random() * 40 + 5,
      opacity: 1,
      transition: 0.5,
    }

    setCircles(prev => [...prev, newCircle])

    setTimeout(() => {
      setCircles(prev => prev.filter(circle => circle.id !== newCircle.id))
    }, 500)
  }

  return (
    <div className={`relative ${className}`} onMouseMove={createCircle}>
      {/* Separate layer for circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {circles.map(circle => (
          <div
            key={circle.id}
            className="absolute rounded-full bg-bg-dark"
            style={{
              left: `${circle.x}px`,
              top: `${circle.y}px`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              transition: `all ${circle.transition}s ease-out`,
              animation: "fadeOut 1s ease-out forwards",
            }}
          />
        ))}
      </div>

      {/* Content layer */}
      <div className="relative">{children}</div>
    </div>
  )
}

export default BubbleAnimation
