import { FaPhoneAlt } from "react-icons/fa";
import BlobCursor from "../../../Animation/BlobCursor";

function About() {
  return (
    <div id="about" className="overflow-hidden bg-base-100 px-5 pb-0 pt-8 text-base-content sm:pt-10">
      <div>
        <h2 className="text-center text-3xl font-bold">About Me</h2>
        <p className="text-center mt-4 max-w-xl mx-auto px-5 text-md">
          Passionate Frontend Developer creating interactive, responsive, and user-friendly web applications with modern technologies.

        </p>
      </div>
      <div className="mx-auto mt-5 flex w-full max-w-[1200px] flex-col items-center justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
        <div className="flex w-full max-w-xl items-end self-end">
          <img
            className="mx-auto block w-full max-w-xl"
            src="https://i.postimg.cc/QNBhzf6d/fg.png"
            alt="kauser-img"
          />
        </div>
        <div className="w-full max-w-[600px] self-center text-justify text-base leading-relaxed lg:text-sm">
          <p className="mb-4">
            Hello! I’m Kausar Mia, a passionate and dedicated Front-End Web
            Developer from Mymensingh, Bangladesh. I’ve completed my Diploma in
            Computer Technology, and I’m currently building my career in web
            development. I started my journey with HTML, CSS, and JavaScript,
            and gradually developed strong skills in React, Tailwind CSS, and
            modern web frameworks.
          </p>
          <p className="mb-4">
            I love creating clean, responsive, and user-friendly websites that
            provide great user experiences. Coding isn’t just my skill—it’s
            something I truly enjoy. Every day, I spend hours improving my
            coding ability and learning new technologies to stay updated with
            the fast-moving web world.
          </p>
          <p className="mb-4">
            Right now, I’m focusing on becoming a full-stack developer, and I’m
            also exploring real-world projects through my job at Softvens
            Agency. My goal is to build modern and impactful web applications
            that make people’s lives easier. I believe in continuous learning,
            teamwork, and writing code that’s simple, efficient, and elegant.
          </p>
          <p>
            Outside of coding, I enjoy learning new skills, listening to music,
            and exploring creative ideas that inspire me to grow as both a
            developer and a person.
          </p>
          <a
            href="#contact"
            className="btn mt-6 border-none bg-[#ed2519] px-6 py-5 text-white hover:bg-white hover:text-black"
          >
            <FaPhoneAlt /> Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
