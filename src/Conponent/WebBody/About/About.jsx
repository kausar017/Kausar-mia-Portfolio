import { FaPhoneAlt } from "react-icons/fa";
import BlobCursor from "../../../Animation/BlobCursor";

function About() {
  return (
    <div id="about" className="bg-black/95 text-white pt-20">
      <div>
        <h2 className="text-center text-3xl font-bold">About Me</h2>
        <p className="text-center mt-4 max-w-2xl mx-auto px-5 text-lg">
          I'm a passionate frontend developer with a knack for creating
          interactive and user-friendly web applications. My journey in web
          development began with a curiosity for technology and a desire to
          build things that make a difference.
        </p>
      </div>
      <div className="container mx-auto xl:flex lg:flex max-md:flex-col max-sm:flex-col justify-between items-center mt-5 max-sm:mt-5">
        <div>
          <img
            className="w-full"
            src="https://i.postimg.cc/QNBhzf6d/fg.png"
            alt="kauser-img"
          />
        </div>
        <div className="w-100% max-w-2xl text-lg text-justify px-3">
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
          <button className="btn bg-[#ed2519] px-6 py-5 text-white hover:bg-white hover:text-black border-none mt-6 ">
            <FaPhoneAlt /> Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
