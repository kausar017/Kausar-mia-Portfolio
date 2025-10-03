import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="hero bg-black text-white flex md:flex-col justify-around items-center ">
      <div className="container flex justify-between items-center gap-10 px-5 ">
        <div className="w-100% max-w-xl">
          <p className="text-xl font-semibold">Hi I'm</p>
          <h1 className="text-6xl font-bold mt-2">
            <span className="text-[#ED2519]">Kausar</span> Mia
          </h1>
          <h3 className="text-3xl font-semibold my-6">
            <Typewriter
              words={[
                "Frontend Developer",
                "Mern-stack Developer",
                "CMS Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>

          <p className="mb-6 text-lg">
            I'm a frontend developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building responsive web applications.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-[#ED2519] border-none text-white">Hire Me</button>
            <button className="btn text-white bg-transparent hover:bg-white/20">Download CV</button>
          </div>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/QNBhzf6d/fg.png"
            alt="kausar"
            className="w-full rounded-lg relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
