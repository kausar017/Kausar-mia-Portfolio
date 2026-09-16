import { useEffect, useState } from "react";

export default function ClientReview() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("/Review.json")
            .then((response) => response.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error("Failed to load reviews:", error));
    }, []);

    const scrollingReviews = [...reviews, ...reviews];

    return (
        <section className="overflow-hidden bg-base-200 bg-gradient-to-br from-[#ed2519]/10 via-transparent to-transparent py-20">
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
                className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
                aria-label="Client reviews"
            >
                <div className="flex w-max animate-review-scroll hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
                    {scrollingReviews.map((review, index) => (
                        <article
                            className="card mr-6 flex min-h-[245px] w-[82vw] max-w-[390px] shrink-0 flex-col justify-between rounded-xl border border-base-content/10 bg-base-200/60 p-6 shadow-xl"
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
        </section>
    );
}
