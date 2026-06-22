import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence" },
  { value: 15, suffix: "M+", label: "Sq. Ft. Delivered" },
  { value: 50000, suffix: "+", label: "Happy Residents" },
  { value: 100, suffix: "%", label: "Commitment to Quality" },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    category: "Homeowner",
    project: "Naira Skyview",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    quote:
      "We spent two years searching for a home that felt right, and the moment we walked into Naira Skyview, the search ended. What stayed with us wasn't the finish or the view — it was how every promise made at booking was honoured at handover, to the day. Three years in, the building is still maintained like launch day. Naira didn't sell us an apartment; they handed us a life we're proud of.",
  },
  {
    name: "Priya Nair",
    category: "Family Buyer",
    project: "Naira Greens",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    quote:
      "As a family with young children and ageing parents, we needed a home that worked for everyone. Naira Greens understood that better than we did. The open layouts, the natural light, the safe walking paths — nothing feels accidental. My father, who rarely steps out, now spends his evenings in the gardens. We didn't just buy a flat; we found a community where three generations of my family feel genuinely at home.",
  },
  {
    name: "Rohit Kapoor",
    category: "Investor",
    project: "Naira Waterfront",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    quote:
      "I've invested in property across three cities, and Naira is the only developer I've returned to twice. Their reading of location and timing is exceptional — Waterfront appreciated faster than anything in my portfolio. But what earns my trust is the transparency: clear documentation, no hidden costs, updates that actually arrive on schedule. When a developer treats a small investor as seriously as a large one, you remember it.",
  },
  {
    name: "Sneha Reddy",
    category: "Homeowner",
    project: "Naira Vista",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    quote:
      "Buying my first home alone felt overwhelming until I met the Naira team. They walked me through every drawing, every material, every clause — never once making a question feel too small. The model home matched the final home almost exactly, which I've learned is rare. Possession came earlier than promised, and the quality genuinely surprised me. Vista is the first thing I've built entirely on my own terms, and they made that journey feel safe.",
  },
  {
    name: "Vikram & Anjali Shah",
    category: "Family Buyer",
    project: "Naira Heights",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    quote:
      "After a difficult experience with another builder, we were cautious to the point of paranoia. Naira Heights slowly rebuilt our faith. Every milestone arrived with photos and honest timelines, even when delays were beyond their control. The construction quality is something we now show off to friends. What moved us most was the handover — treated like a celebration, not a transaction. We cannot imagine a kinder place to have planted our roots.",
  },
];

function StatNumber({ value, suffix }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.floor(eased * value));
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const touchX = useRef(0);

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  const recompute = () => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const card = track.children[active];
    if (!card) return;
    const newOffset =
      wrap.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2);
    setOffset(newOffset);
  };

  useLayoutEffect(() => {
    recompute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const onResize = () => recompute();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    setPaused(false);
  };

  return (
    <section className="bg-mist py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-muted text-xs tracking-[0.3em] uppercase mb-6">
            Testimonials
          </p>
          <h2 className="font-serif text-5xl md:text-7xl font-light leading-[0.95] text-ink mb-6">
            Trust In Their Words
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Real stories from homeowners, investors, and families who chose
            Naira Estates and found more than just a property.
          </p>
        </motion.div>

        {/* Trust statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif italic text-2xl md:text-4xl font-light text-ink/80 leading-snug text-center max-w-4xl mx-auto mt-16 md:mt-24"
        >
          "Trust is not built through promises. It is earned through every home
          delivered, every commitment honored, and every family that chooses to
          stay with us."
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 border-y border-ink/10 py-12 md:py-14 mt-16 md:mt-24"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl md:text-6xl font-light text-ink leading-none">
                <StatNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-muted text-[11px] md:text-xs tracking-[0.18em] uppercase mt-4">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-8%" }}
        transition={{ duration: 0.8 }}
        className="mt-16 md:mt-24"
      >
        <div
          ref={wrapRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative w-full overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex items-stretch"
            style={{
              transform: `translateX(${offset}px)`,
              transition: "transform 700ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                onClick={() => i !== active && setActive(i)}
                className={`shrink-0 w-[86%] sm:w-[78%] lg:w-[62%] px-2.5 md:px-4 ${
                  i !== active ? "cursor-pointer" : ""
                }`}
              >
                <div
                  className={`group relative h-full overflow-hidden bg-ivory border border-ink/10 grid md:grid-cols-[40%_1fr] transition-all duration-500 ${
                    active === i
                      ? "opacity-100 scale-100 shadow-[0_40px_90px_-35px_rgba(20,20,20,0.35)]"
                      : "opacity-40 scale-[0.93]"
                  }`}
                >
                  <div className="relative h-60 md:h-auto min-h-[240px] overflow-hidden">
                    <img
                      src={t.image}
                      alt={t.name}
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          t.name
                        )}&background=141414&color=fff&size=400`;
                      }}
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="relative p-8 md:p-12 flex flex-col justify-center">
                    <Quote
                      className="absolute top-7 right-7 text-ink/10"
                      size={56}
                      strokeWidth={1}
                    />
                    <div className="flex gap-1 mb-6 relative z-10">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          size={16}
                          className="fill-ink text-ink"
                        />
                      ))}
                    </div>
                    <p className="relative z-10 font-serif text-lg md:text-2xl leading-[1.5] font-light text-ink mb-8">
                      {t.quote}
                    </p>
                    <div className="relative z-10 border-t border-ink/10 pt-5">
                      <p className="font-serif text-2xl text-ink leading-none mb-2">
                        {t.name}
                      </p>
                      <p className="text-muted text-xs tracking-[0.18em] uppercase">
                        {t.category} · {t.project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 mt-12 flex items-center justify-center gap-8">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-12 h-12 rounded-full border border-ink/25 text-ink flex items-center justify-center hover:bg-ink hover:text-ivory transition-colors"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === i ? "w-8 bg-ink" : "w-2 bg-ink/25 hover:bg-ink/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="w-12 h-12 rounded-full border border-ink/25 text-ink flex items-center justify-center hover:bg-ink hover:text-ivory transition-colors"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;