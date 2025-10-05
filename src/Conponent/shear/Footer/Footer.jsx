import { BsTiktok } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#121212]">
      <footer className="container mx-auto grid grid-cols-12 max-lg:grid-cols-1 max-sm:grid-cols-2 gap-8 py-10 px-5">
        <aside className="col-span-4">
          <img
            className="w-100% max-w-[80px]"
            src="https://res.cloudinary.com/dfyzxjsb5/image/upload/v1758793681/kausar_mia_rqlmol.png"
            alt="kausar"
          />
          <p className="text-white">
            ACME Industries Ltd.
            <br />  
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-4 mt-4 text-white">
            <IoLogoGithub size={30} />
            <FaFacebookF size={30} />
            <FaInstagram size={30}></FaInstagram>
            <FaLinkedinIn size={30}></FaLinkedinIn>
          </div>
        </aside>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 max-sm: grid-cols-2 gap-8 justify-between col-span-8">
          <nav className="flex flex-col text-white mr-20">
            <h6 className="footer-title">Resources</h6>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Documentation</a>
            <a className="link link-hover">Tutorials</a>
          </nav>
          <nav className="text-white flex flex-col mr-20">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="text-white flex flex-col mr-20">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="text-white flex flex-col">
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
