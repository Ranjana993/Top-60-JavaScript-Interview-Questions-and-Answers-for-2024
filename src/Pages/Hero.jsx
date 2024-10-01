import logo from "../assets/hero1.gif";



const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        {/* Background GIF */}
        <img src={logo} alt="Background GIF" className="absolute inset-0 w-full h-full object-cover opacity-60" />

        {/* Motivational Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold md:text-6xl lg:text-7xl">
            Make a Better Version of You
          </h1>
          <p className="text-white mt-4 text-lg md:text-xl lg:text-2xl">
            Let&apos;s code your future, one line at a time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero