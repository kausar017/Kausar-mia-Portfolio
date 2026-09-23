import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClientReview() {
    const sectionRef = useRef(null);
    const [reviews, setReviews] = useState([]);
    const [activeReview, setActiveReview] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        fetch("/Review.json")
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Failed to load reviews:", error));
    }, []);

    useEffect(() => {
        if (!reviews.length || isPaused) return undefined;

        const interval = setInterval(() => {
            setActiveReview((current) => (current + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, reviews.length]);

    useEffect(() => {
        if (!reviews.length) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".review-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
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
    }, [reviews.length]);

    const showPreviousReview = () => {
        setActiveReview((current) => (current - 1 + reviews.length) % reviews.length);
    };

    const showNextReview = () => {
        setActiveReview((current) => (current + 1) % reviews.length);
    };

    const scrollingReviews = [...reviews, ...reviews];

    return (
        <section ref={sectionRef} className="overflow-hidden bg-base-200 bg-gradient-to-br from-[#ed2519]/10 via-transparent to-transparent py-20">
            <div className="mx-auto mb-10 max-w-3xl px-5 text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#ed2519]">
                    Client Reviews
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">What clients say</h2>
                <p className="mt-4 text-base-content/65">
                    Real feedback from clients I have had the pleasure of working with.
                </p>
            </div>

            <div
                className="mx-auto w-full max-w-[430px] overflow-hidden px-4 md:hidden"
                aria-label="Client reviews"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
                    style={{ transform: `translateX(-${activeReview * 100}%)` }}
                >
                    {reviews.map((review, index) => (
                        <article
                            className="review-card card mx-2 flex min-h-[245px] w-[calc(100%-1rem)] shrink-0 flex-col justify-between rounded-xl border border-base-content/10 bg-base-200/60 p-5 shadow-xl sm:p-6"
                            key={`${review.client_name}-${index}`}
                        >
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <span className="text-lg tracking-widest text-[#ed2519]" aria-label="5 star rating">
                                    {review.rating.slice(0, 5)}
                                </span>
                                <span className="text-xs font-medium uppercase tracking-wider text-base-content/45">
                                    Verified client
                                </span>
                            </div>
                            <p className="line-clamp-5 overflow-hidden leading-relaxed text-base-content/75">“{review.review}”</p>
                            <p className="mt-5 font-semibold text-base-content">{review.client_name}</p>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
                <button
                    type="button"
                    aria-label="Previous review"
                    onClick={showPreviousReview}
                    className="btn btn-circle btn-sm border-[#ed2519] bg-transparent text-[#ed2519] hover:bg-[#ed2519] hover:text-white"
                >
                    <ChevronLeft size={18} />
                </button>
                <span className="min-w-16 text-center text-sm text-base-content/60">
                    {reviews.length ? `${activeReview + 1} / ${reviews.length}` : "0 / 0"}
                </span>
                <button
                    type="button"
                    aria-label="Next review"
                    onClick={showNextReview}
                    className="btn btn-circle btn-sm border-[#ed2519] bg-transparent text-[#ed2519] hover:bg-[#ed2519] hover:text-white"
                >
                    <ChevronRight size={18} />
                </button>
            </div>

            <div
                className="mx-auto hidden w-full overflow-hidden px-4 [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] md:block"
                aria-label="Scrolling client reviews"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex w-max animate-review-scroll hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
                    {scrollingReviews.map((review, index) => (
                        <article
                            className="review-card card mr-6 flex min-h-[245px] w-[390px] shrink-0 flex-col justify-between rounded-xl border border-base-content/10 bg-base-200/60 p-6 shadow-xl"
                            key={`${review.client_name}-desktop-${index}`}
                        >
                            <div className="mb-4 flex items-center justify-between gap-4">
                                <span className="text-lg tracking-widest text-[#ed2519]" aria-label="5 star rating">
                                    {review.rating.slice(0, 5)}
                                </span>
                                <span className="text-xs font-medium uppercase tracking-wider text-base-content/45">
                                    Verified client
                                </span>
                            </div>
                            <p className="line-clamp-5 overflow-hidden leading-relaxed text-base-content/75">“{review.review}”</p>
                            <p className="mt-5 font-semibold text-base-content">{review.client_name}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
