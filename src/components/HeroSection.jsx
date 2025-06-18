import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    const words = paraRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0.2, y: 10 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        ease: "power1.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const paragraph =
    "Experience the elegance of modern design with products crafted to inspire.";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1607082349566-187342215f23?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
     
      <div className="absolute inset-0 bg-black/60 z-0" />

      
      <img
        src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG35.png"
        alt="Mobile Phone"
        className="hidden md:block absolute right-10 bottom-0 h-[400px] opacity-90 z-10 pointer-events-none"
      />

      
      <div className="relative z-20 text-center max-w-3xl text-white">
        <h1
          ref={headingRef}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Welcome to Our Store
        </h1>

        <p
          ref={paraRef}
          className="text-base sm:text-lg md:text-xl leading-relaxed flex flex-wrap justify-center gap-1"
        >
          {paragraph.split(" ").map((word, i) => (
            <span key={i} className="word">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
