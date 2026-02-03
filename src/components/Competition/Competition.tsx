import { useEffect, useMemo, useRef, useState } from "react";
import CompetitionCard from "./CompetitionCard/CompetitionCard";
import Compe1 from "../../assets/competition/contest1.jpg";
import Compe2 from "../../assets/competition/contest2.jpg";
import Compe3 from "../../assets/competition/contest3.jpg";
import Compe4 from "../../assets/competition/contest4.jpg";

function Competition() {
  const cards = useMemo(
    () => [
      {
        name: "OLP Tin học SV 2025",
        image: Compe4,
        desc: "Cuộc thi dành cho sinh viên các trường ĐH",
      },
      {
        name: "OLP Tin học SV 2024",
        image: Compe1,
        desc: "Cuộc thi dành cho sinh viên các trường ĐH",
      },
      {
        name: "The IT Club Freshman Code War",
        image: Compe2,
        desc: "Cuộc thi dành cho sinh viên các trường ĐH",
      },
      {
        name: "OLP Tin học cấp trường",
        image: Compe3,
        desc: "Cuộc thi dành cho sinh viên các trường ĐH",
      },
    ],
    [],
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    if (!scrollRef.current) return;

    const updatePages = () => {
      const node = scrollRef.current;
      if (!node) return;
      const pages = Math.max(1, Math.ceil(node.scrollWidth / node.clientWidth));
      setPageCount(pages);
      setCurrentPage((prev) => Math.min(prev, pages - 1));
    };

    updatePages();

    const observer = new ResizeObserver(updatePages);
    observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, [cards.length]);

  const handleScroll = () => {
    const node = scrollRef.current;
    if (!node) return;
    const nextPage = Math.round(node.scrollLeft / node.clientWidth);
    setCurrentPage(nextPage);
  };

  const goPrev = () => {
    const node = scrollRef.current;
    if (!node) return;
    const nextPage = Math.max(0, currentPage - 1);
    node.scrollTo({ left: node.clientWidth * nextPage, behavior: "smooth" });
  };

  const goNext = () => {
    const node = scrollRef.current;
    if (!node) return;
    const nextPage = Math.min(pageCount - 1, currentPage + 1);
    node.scrollTo({ left: node.clientWidth * nextPage, behavior: "smooth" });
  };

  return (
    <div id="competition" className="w-screen">
      <h1
        className="text-center tracking-normal
                       font-[Inter] md:text-5xl text-xl font-bold text-[#267452]
                       "
      >
        CÁC CUỘC THI
      </h1>
      <div className="mx-auto mt-2 bg-[#39906A] md:w-[525px] w-[200px] h-[4px] mb-20"></div>
      <div className="relative mx-auto w-[90%] max-w-[1200px]">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous competition"
          className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-[#267452] shadow-md hover:bg-white"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-2 px-10 scroll-px-10"
        >
          {cards.map((card, index) => (
            <div
              key={`${card.name}-${index}`}
              className="snap-start flex-shrink-0"
            >
              <CompetitionCard card={card} />
            </div>
          ))}
          <div className="flex-shrink-0 w-10" aria-hidden="true" />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next competition"
          className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-[#267452] shadow-md hover:bg-white"
        >
          ›
        </button>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => {
                const node = scrollRef.current;
                if (!node) return;
                node.scrollTo({
                  left: node.clientWidth * index,
                  behavior: "smooth",
                });
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === currentPage ? "bg-[#267452]" : "bg-[#C9E4D7]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Competition;
