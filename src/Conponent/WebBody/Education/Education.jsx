import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="overflow-hidden bg-base-200 px-5 py-16 text-base-content sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ed2519]">
            My journey
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">Education</h2>
          <p className="mt-4 text-base-content/70">
            My academic background in science and computer technology, shaped
            by a strong passion for learning and technology.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute left-3 top-2 h-[calc(100%-1rem)] w-px bg-[#ed2519]/30 sm:left-1/2 sm:-translate-x-1/2" />

          <article className="education-item relative grid gap-6 pl-12 sm:grid-cols-2 sm:gap-12 sm:pl-0">
            <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-base-200 bg-[#ed2519] sm:left-1/2 sm:-translate-x-1/2">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <div className="sm:text-right">
              <p className="text-sm font-semibold text-[#ed2519]">Running</p>
              <h3 className="mt-2 text-xl font-bold">
                B.Sc in Computer Science & Engineering
              </h3>
              <p className="mt-3 text-sm leading-6 text-base-content/70">
                Northern University Bangladesh
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-base-content/60">Status</p>
              <p className="mt-2 text-sm leading-6 text-base-content/70">Currently running</p>
            </div>
          </article>

          <article className="education-item relative mt-12 grid gap-6 pl-12 sm:grid-cols-2 sm:gap-12 sm:pl-0">
            <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-base-200 bg-[#ed2519] sm:left-1/2 sm:-translate-x-1/2">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <div className="sm:text-right">
              <p className="text-sm font-semibold text-[#ed2519]">2024</p>
              <h3 className="mt-2 text-xl font-bold">
                Diploma in Computer Science
              </h3>
              <p className="mt-3 text-sm leading-6 text-base-content/70">
                Sherpur Polytechnic Institute
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-base-content/60">Result</p>
              <p className="mt-2 text-sm leading-6 text-base-content/70">CGPA 3.38</p>
            </div>
          </article>

          <article className="education-item relative mt-12 grid gap-6 pl-12 sm:grid-cols-2 sm:gap-12 sm:pl-0">
            <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-base-200 bg-[#ed2519] sm:left-1/2 sm:-translate-x-1/2">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <div className="order-2 sm:order-1 sm:text-right">
              <p className="text-sm font-semibold text-base-content/60">Result</p>
              <p className="mt-2 text-sm leading-6 text-base-content/70">
                GPA 4.90
              </p>
            </div>
            <div className="order-1 sm:order-2">
              <p className="text-sm font-semibold text-[#ed2519]">2021</p>
              <h3 className="mt-2 text-xl font-bold">
                Higher Secondary Certificate
              </h3>
              <p className="mt-3 text-sm leading-6 text-base-content/70">
                Gouripur Tsc College
              </p>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ed2519]">
              Certifications
            </p>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Professional Training</h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <a
              href="https://drive.google.com/file/d/1KpYf8lVn6fF05O4Edu7oa0LQo7bJDVDU/view"
              target="_blank"
              rel="noreferrer"
              className="education-item block rounded-2xl border border-base-content/10 bg-base-100 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#ed2519] hover:shadow-[0_10px_25px_rgba(237,37,25,0.12)]"
            >
              <p className="text-sm font-semibold text-[#ed2519]">2024</p>
              <h4 className="mt-2 text-xl font-bold">Web Development Certification</h4>
              <p className="mt-2 text-base-content/70">Creative IT Institute</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#ed2519]">
                Live Preview →
              </span>
            </a>

            <a
              href="https://drive.google.com/file/d/1b-UvrsuiBGMp2VWJgEJMhkCXfmMzkaNA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="education-item block rounded-2xl border border-base-content/10 bg-base-100 p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#ed2519] hover:shadow-[0_10px_25px_rgba(237,37,25,0.12)]"
            >
              <p className="text-sm font-semibold text-[#ed2519]">2024</p>
              <h4 className="mt-2 text-xl font-bold">Web Development Certification</h4>
              <p className="mt-2 text-base-content/70">Programming Hero</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#ed2519]">
                Live Preview →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;