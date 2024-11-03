import HeroImage from "../../public/clothe.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const heroRef = useRef(null);
  useGSAP(
    () => {
      // create timeline
      const tl = gsap.timeline();

      // setup default property
      gsap.set([titleRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        y: 80,
      });

      // setup animation order
      tl.to([titleRef.current, textRef.current, buttonRef.current], {
        delay: 0.8,
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: {
          each: 0.5,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-10 text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8 md:space-y-14" ref={heroRef}>
          <h1
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            ref={titleRef}
          >
            Timeless Elegance
          </h1>

          <p
            className="mx-auto max-w-2xl text-lg text-gray-200 sm:text-xl lg:max-w-3xl lg:text-2xl"
            ref={textRef}
          >
            Discover our curated collection of sophisticated fashion pieces that
            transcend seasons and define your unique style.
          </p>

          <NavLink
            to="/items"
            className="relative inline-flex items-center rounded-full bg-white px-8 py-3 text-lg font-semibold uppercase tracking-wider text-gray-900"
            ref={buttonRef}
          >
            Browse Items
          </NavLink>
        </div>
      </div>
      {/* <div
        className="flex h-screen flex-col items-center justify-center gap-10 bg-cover bg-center bg-no-repeat px-12"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <h1 className="text-3xl text-stone-50 sm:text-4xl md:text-6xl">
          Timeless Elegance
        </h1>
        <p className="text-center text-base text-stone-50 md:text-2xl">
          Discover our curated collection of sophisticated fashion pieces that
          transcend seasons and define your unique style.
        </p>
        <NavLink
          to="/items"
          className="rounded-full bg-white px-8 py-3 text-lg font-semibold uppercase tracking-widest opacity-50 transition-all duration-300 hover:translate-y-[-5px] hover:opacity-100 hover:shadow-md"
        >
          Browse Items
        </NavLink>
      </div> */}
    </div>
  );
}
