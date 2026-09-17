function Education() {
  return (
    <section
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

          <article className="relative grid gap-6 sm:grid-cols-2 sm:gap-12">
            <div className="sm:text-right">
              <p className="text-sm font-semibold text-[#ed2519]">2024</p>
              <h3 className="mt-2 text-xl font-bold">
                Diploma in Computer Science
              </h3>
              <p className="mt-3 text-sm leading-6 text-base-content/70">
                Sherpur Polytechnic Institute
              </p>
            </div>
            <div className="relative pl-10 sm:pl-0">
              <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-base-200 bg-[#ed2519] sm:-left-[3.45rem]">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
              <p className="text-sm font-semibold text-base-content/60">Result</p>
              <p className="mt-2 text-sm leading-6 text-base-content/70">Grade A</p>
            </div>
          </article>

          <article className="relative mt-12 grid gap-6 sm:grid-cols-2 sm:gap-12">
            <div className="order-2 relative pl-10 sm:order-1 sm:pl-0 sm:text-right">
              <p className="text-sm font-semibold text-base-content/60">Result</p>
              <p className="mt-2 text-sm leading-6 text-base-content/70">
                GPA 4.90
              </p>
            </div>
            <div className="order-1 pl-10 sm:order-2">
              <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-base-200 bg-[#ed2519] sm:left-1/2 sm:-translate-x-1/2">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>
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
      </div>
    </section>
  );
}

export default Education;