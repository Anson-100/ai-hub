const LineGradient = ({ width = "w-full" }) => {
  return (
    <div className={`h-2 ${width} bg-transparent`}>
      <div className="w-1/4 mx-auto h-[1px] bg-zinc-600"></div>
    </div>
  )
}

export default LineGradient
