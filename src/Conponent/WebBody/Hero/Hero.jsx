import {
  FaDownload,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import About from "../About/About";
import Particles from "../../../Animation/Particles";

function Hero() {
  return (
    <>
      <div>
        <div
          id="hero"
          className="text-white flex md:flex-col bg-black justify-center items-center"
        >
          <div className="container flex justify-between items-center gap-10 px-5 max-xl:pt-8  max-lg:flex-col mx-lg:px-0 max-lg:pt-20">
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
                I'm a frontend developer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I'm focused on building responsive web applications.
              </p>
              <div className="flex gap-4 my-4 text-white">
                <a
                  href="https://github.com/kausar017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IoLogoGithub size={30} />
                </a>
                <a
                  href="https://www.facebook.com/kausar017"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="https://www.instagram.com/md.kousar_mia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={30} />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={30} />
                </a>
              </div>
              <div className="flex gap-4">
                <button className="btn bg-[#ED2519] border-none text-white hover:bg-white hover:text-black">
                  Hire Me
                </button>
                <button className="btn text-white bg-transparent hover:bg-white/20">
                  Download CV <FaDownload />
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/QNBhzf6d/fg.png"
                alt="kausar"
                className="relative z-10"
              />
            </div>
          </div>
          <div style={{ position: "absolute", top: 0, left: 0, zIndex: 0, width: "100%", height: "100%" }}>
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={300}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={200}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>
      </div>

      {/* about section  */}
      <section>
        <About></About>
      </section>
    </>
  );
}

export default Hero;
