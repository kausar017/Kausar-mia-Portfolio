import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="bg-base-300 text-base-content">
      <footer className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-5 py-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">
        <aside className="flex flex-col items-center sm:items-start">
          <img
            className="w-20"
            src="https://i.postimg.cc/SxrqzBBZ/download.png"
            alt="kausar"
          />
          <p className="mt-2 text-sm text-base-content/70">
            Kausar Mia · Frontend Developer
          </p>
          <div className="mt-4 flex gap-4">
            <a href="https://github.com/kausar017" target="_blank" rel="noreferrer">
              <IoLogoGithub size={30} />
            </a>
            <a href="https://www.facebook.com/kausar017" target="_blank" rel="noreferrer">
              <FaFacebookF size={30} />
            </a>
            <a href="https://www.instagram.com/md.kousar_mia/" target="_blank" rel="noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/kausar-mia-developer/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </aside>

        <nav className="flex flex-col items-center gap-2 sm:items-start">
          <h3 className="mb-2 font-semibold">Quick Links</h3>
          <a href="#hero" className="link link-hover text-sm">Home</a>
          <a href="#about" className="link link-hover text-sm">About Me</a>
          <a href="#portfolio" className="link link-hover text-sm">Portfolio</a>
        </nav>

        <div className="flex flex-col items-center gap-2 sm:items-start">
          <h3 className="mb-2 font-semibold">Contact Us</h3>
          <a href="mailto:mdkousarmia71@gmail.com" className="flex items-center gap-2 link link-hover text-sm">
            <Mail size={15} className="shrink-0 text-[#ed2519]" />
            mdkousarmia71@gmail.com
          </a>
          <a href="https://wa.me/8801786876781" target="_blank" rel="noreferrer" className="flex items-center gap-2 link link-hover text-sm">
            <MessageCircle size={15} className="shrink-0 text-[#ed2519]" />
            01786876781 (WhatsApp)
          </a>
          <p className="flex items-center gap-2 text-sm text-base-content/70">
            <MapPin size={15} className="shrink-0 text-[#ed2519]" />
            Mymensingh, Bangladesh
          </p>
          <a href="https://www.linkedin.com/in/kausar-mia-developer/" target="_blank" rel="noreferrer" className="flex items-center gap-2 link link-hover text-sm">
            <FaLinkedinIn size={15} className="shrink-0 text-[#ed2519]" />
            Message on LinkedIn
          </a>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Newsletter</h3>
          <p className="mb-3 text-sm text-base-content/70">Get occasional updates and new work.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row lg:flex-col">
            <input
              type="email"
              required
              placeholder="Your email"
              aria-label="Your email address"
              className="input input-sm w-full bg-base-100"
            />
            <button type="submit" className="btn btn-sm bg-[#ed2519] text-white hover:bg-[#c91d14]">
              Subscribe
            </button>
          </form>
          {subscribed && <p className="mt-2 text-xs text-[#ed2519]">Thanks for subscribing!</p>}
        </div>
      </footer>
      <p className="border-t border-base-content/10 px-5 py-4 text-center text-xs text-base-content/55">
        © {new Date().getFullYear()} Kausar Mia. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
