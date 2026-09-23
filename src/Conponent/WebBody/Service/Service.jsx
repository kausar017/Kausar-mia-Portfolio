import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Service() {
  const [ServiceData, setServiceData] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/Service.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!ServiceData.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [ServiceData.length]);

  return (
    <>
      <div ref={sectionRef} id="service" className="bg-base-200 py-16 text-base-content sm:py-20">
        <div className="text-center text-3xl font-bold sm:text-4xl">Our Service</div>

        <div className="mx-auto mt-10 grid w-full max-w-[1200px] grid-cols-1 justify-items-center gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              className="service-card card hover-3d w-full max-w-96 shadow-2xl mx-auto hover:scale-105 transition-all duration-500 cursor-pointer 
              hover:shadow-[2px_2px_10px_5px_rgba(237,37,25,0.8)] bg-[url('https://i.pinimg.com/1200x/f4/a9/e3/f4a9e3f2ae3f5cd070b6e474ed4c2edb.jpg')] bg-cover bg-center"
            >
              {/* <div class="absolute inset-0 bg-black/50"></div> */}
              <figure className="px-10 pt-10">
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-14"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-xl text-[#ED2519]">{data?.title}</h2>
                <p>{data?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Service;
