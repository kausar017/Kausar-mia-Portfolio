import { BsTiktok } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-base-300 text-base-content">
      <footer className="container mx-auto grid grid-cols-1 gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-12">
        <aside className="col-span-1 lg:col-span-4">
          <img
            className="w-100% max-w-[80px]"
            src="https://i.postimg.cc/SxrqzBBZ/download.png"
            alt="kausar"
          />
          <p>
            ACME Industries Ltd.
            <br />  
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-4 mt-4">
            <IoLogoGithub size={30} />
            <FaFacebookF size={30} />
            <FaInstagram size={30}></FaInstagram>
            <FaLinkedinIn size={30}></FaLinkedinIn>
          </div>
        </aside>
        <div className="col-span-1 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
          <nav className="flex flex-col">
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Tutorials</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
