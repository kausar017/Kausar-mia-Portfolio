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
import Service from "../Service/Service";
import Portfolio from "../Portfolio/Portfolio";
import ClientReview from "../ClientReview/ClientReview";
import LogoSlide from "../LogoSlide/LogoSlide";

function Hero() {
  return (
    <>
      <div>
        <div
          id="hero"
          className="text-base-content flex md:flex-col bg-base-100 bg-gradient-to-br from-[#ed2519]/10 via-transparent to-transparent justify-center items-center"
        >
          <div className="w-full max-w-[1200px] flex justify-between items-center gap-10 px-5 max-xl:pt-8 max-lg:flex-col mx-lg:px-0 max-lg:pt-20">
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
              <div className="flex gap-4 my-4 text-base-content">
                <a
                  href="https://github.com/kausar017"
                  target="_blank"
                  rel="noreferrer"
                  className="z-10"
                >
                  <IoLogoGithub size={30} />
                </a>
                <a
                  href="https://www.facebook.com/kausar017"
                  target="_blank"
                  rel="noreferrer"
                  className="z-10"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="https://www.instagram.com/md.kousar_mia/"
                  target="_blank"
                  rel="noreferrer"
                  className="z-10"
                >
                  <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/in/kausar-mia-developer/" target="_blank" rel="noreferrer" className="z-10">
                  <FaLinkedinIn size={30} />
                </a>
              </div>
              <div className="flex gap-4 z-10">
                <a
                  href="#"
                  className="btn bg-[#ED2519] border-none text-white hover:bg-white hover:text-black z-10"
                >
                  Hire Me
                </a>
                <a
                  href="public/CV/Kausar_Mia_CV.pdf"
                  download
                  className="btn text-white bg-transparent border border-white hover:bg-[#ED2519] z-10"
                >
                  Download CV <FaDownload />
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/QNBhzf6d/fg.png"
                // src="https://i.postimg.cc/13bPggS7/control-loop.gif"
                alt="kausar"
                className="relative z-10 w-full max-w-3xl mt-10"
              />
            </div>
          </div>
        
        </div>
      </div>

      <section>
        {/* service section */}
        <Service></Service>
        {/* about section  */}
        <About></About>
        {/* logo slide section */}
        <LogoSlide></LogoSlide>
        {/* portfolio section */}
        <Portfolio></Portfolio>
        {/* client review section */}
        <ClientReview></ClientReview>
      </section>
    </>
  );
}

export default Hero;
