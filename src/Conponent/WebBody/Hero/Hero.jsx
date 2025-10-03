import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div className="hero bg-black text-white h-screen flex md:flex-col justify-around items-center ">
      <div className="container flex justify-between items-center gap-10">
        <div className="w-100% max-w-xl">
          <p className="text-lg font-semibold">Hi I'm</p>
          <h1 className="text-4xl font-bold mt-2">Kausar Mia</h1>
          <h3 className="text-3xl font-semibold my-6">
            <Typewriter
              words={[
                "Frontend Developer",
                "Marn-stak Devoloper",
                "CMS Devoloper",
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
            <button className="btn btn-primary">Hire Me</button>
            <button className="btn btn-secondary">Download CV</button>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqjuyj19t/image/upload/v1758817632/0791f64f-95b5-40ca-97f5-5ac3eb526c4a_tfpkhu.png"
            alt="kausar"
            className="w-full max-w-96 rounded-lg relative z-10"
          />
            <div className="absolute w-72 h-72 bg-purple-700 rounded-full top-0 right-0 z-0 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
