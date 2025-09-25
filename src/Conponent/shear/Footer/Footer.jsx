import { BsTiktok } from "react-icons/bs"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const Footer = () => {
    return (
        <div>
            <footer className="footer text-base-content p-10 flex justify-evenly bg-[#121212] text-white">
                <aside>
                    <img className="w-100% max-w-[80px]" src="https://res.cloudinary.com/dfyzxjsb5/image/upload/v1758793681/kausar_mia_rqlmol.png" alt="kausar" />
                    <p className="text-white">
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <div className="flex gap-4 mt-4 text-white">
                        <FaFacebookF size={30} />
                        <FaInstagram size={30}></FaInstagram>
                        <FaLinkedinIn size={30}></FaLinkedinIn >
                        <BsTiktok size={30}></BsTiktok>
                    </div>
                </aside>
                <nav className="text-white">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer