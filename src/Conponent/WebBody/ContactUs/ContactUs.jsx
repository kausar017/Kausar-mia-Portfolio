import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactUs() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-base-100 px-5 py-16 text-base-content sm:py-20">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#ed2519]">
            Contact Us
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Let&apos;s work together</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-base-content/70">
            Have a project in mind? Send a message and let&apos;s discuss how I can help bring your idea to life.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <a href="mailto:mdkousarmia71@gmail.com" className="flex items-center gap-3 link link-hover">
              <Mail className="text-[#ed2519]" size={20} />
              mdkousarmia71@gmail.com
            </a>
            <a href="https://wa.me/8801786876781" target="_blank" rel="noreferrer" className="flex items-center gap-3 link link-hover">
              <Phone className="text-[#ed2519]" size={20} />
              01786876781 (WhatsApp)
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="text-[#ed2519]" size={20} />
              Mymensingh, Bangladesh
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-base-content/10 bg-base-100 p-5 shadow-xl sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input type="text" required placeholder="Your name" className="input input-bordered w-full" />
            <input type="email" required placeholder="Your email" className="input input-bordered w-full" />
          </div>
          <textarea required placeholder="Tell me about your project" className="textarea textarea-bordered mt-4 min-h-36 w-full" />
          <button type="submit" className="btn mt-4 w-full border-none bg-[#ed2519] text-white hover:bg-[#c91d14] sm:w-auto">
            <Send size={17} />
            Send Message
          </button>
          {sent && <p className="mt-3 text-sm text-[#ed2519]">Thanks! Your message is ready to send.</p>}
        </form>
      </div>
    </section>
  );
}
