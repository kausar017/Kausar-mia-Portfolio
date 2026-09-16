const logos = [
    {
        name: "React",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "JavaScript",
        image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        name: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        name: "CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
        name: "Tailwind",
        image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        name: "Node.js",
        image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "firebase",
        image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
        name: "mongodb",
        image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },
    {
        name: "Api Integration",
        image:
            "https://i.postimg.cc/jdVzbygk/api-app-svgrepo-com.png",
    },
    {
        name: "Squarespace",
        image:
            "https://i.postimg.cc/Y91sxthY/squarespace-132-svgrepo-com.png",
    },
    {
        name: "HubSpot",
        image:
            "https://i.postimg.cc/qR85Gpzs/hubspot-svgrepo-com-(1).png",
    },
    {
        name: "bubble.io",
        image:
            "https://i.postimg.cc/mhf8HC2K/download.png",
    },
    {
        name: "GohighLevel",
        image:
            "https://i.postimg.cc/zv9PF4pW/download.png",
    },
    {
        name: "Photoshop",
        image:
            "https://i.postimg.cc/3NhJLr1f/photoshop-svgrepo-com.png",
    },
    {
        name: "office-365",
        image:
            "https://i.postimg.cc/wTfgNQCr/office-365-logo-svgrepo-com.png",
    }
];

export default function LogoCarousel() {
    // Duplicate logos for seamless infinite scrolling
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="w-full overflow-hidden bg-base-200 py-10">
            <div className="mx-auto max-w-[1200px] px-5">
                <h2 className="mb-8 text-center text-2xl font-bold text-base-content">
                    Technologies We Use
                </h2>

                <div className="group relative overflow-hidden">
                    {/* Left Gradient */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-base-200 to-transparent" />

                    {/* Right Gradient */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-base-200 to-transparent" />

                    {/* Slider */}
                    <div className="logo-track flex w-max gap-6 group-hover:[animation-play-state:paused]">
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`${logo.name}-${index}`}
                                    className="
                  my-8 flex h-28 w-32 shrink-0
                  sm:my-10 sm:w-40
                  cursor-pointer items-center justify-center
                  rounded-2xl border border-[#ffff]/20
                  bg-base-100
                  shadow-sm
                  transition-all duration-300
                  hover:scale-105
                  hover:border-[#ED2519]
                  hover:bg-base-200
                  hover:shadow-xl
                "
                            >
                                <div className="flex flex-col items-center gap-3">
                                    <img
                                        src={logo.image}
                                        alt={logo.name}
                                        className="
                      h-12 w-12
                      object-contain
                      grayscale
                      opacity-70
                      transition-all duration-300
                      group-hover:opacity-100
                      hover:grayscale-0
                      hover:opacity-100
                    "
                                    />

                                    <span className="text-sm font-medium text-base-content/70 transition-colors hover:text-[#ED2519]">
                                        {logo.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom Animation */}
            <style>{`
        .logo-track {
          animation: logo-scroll 25s linear infinite;
        }

        @keyframes logo-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 12px));
          }
        }
      `}</style>
        </section>
    );
}
