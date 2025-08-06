'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const testimonials = [
  {
    name: 'Priya',
    location: 'Pune, India',
    text: `I cried reading my aura report. It felt like someone finally understood me without me saying a word.`,
    image: '/profile.png',
  },
  {
    name: 'Aarav',
    location: 'Delhi, India',
    text: `It gave me a deep insight into my energy field. Extremely validating and eye-opening.`,
    image: '/profile.png',
  },
  {
    name: 'Meera',
    location: 'Bangalore, India',
    text: `This aura reading was so accurate it gave me goosebumps. I highly recommend it.`,
    image: '/profile.png',
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const CARD_WIDTH = 350;
  const GAP = 16;
  const visibleCards = 2; // how many cards are visible in desktop view

  const totalCards = testimonials.length;
  const maxIndex = Math.max(0, totalCards - visibleCards); // stop where last card is fully in view

  const next = () => {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrent((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center pl-4 sm:pl-20">
      <div className="relative w-full">
        {/* Desktop background */}
        <Image
          src="/testimonialbg.svg"
          alt="Connect Background"
          fill
          className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:block hidden"
          priority
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-20 min-h-[720px] w-full">
          {/* Left Section */}
          <div className="text-center w-full max-w-md lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold text-white mb-4">
              What they say about us
            </h2>
            <p className="text-sm sm:text-base lg:text-[20px] text-white leading-[28px] mb-6">
              Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci. Nunc urna, vitae sit sapien diam diam cursus. Cras tempus venenatis consequat.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button
                onClick={prev}
                disabled={current === 0}
                className={`w-10 h-10 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border transition ${
                  current === 0
                    ? 'bg-black border-white text-white'
                    : 'bg-white border-white text-black'
                }`}
              >
                <MdKeyboardArrowLeft size={24} />
              </button>
              <button
                onClick={next}
                disabled={current === maxIndex}
                className={`w-10 h-10 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border transition ${
                  current === maxIndex
                    ? 'bg-black border-white text-white opacity-50 cursor-not-allowed'
                    : 'bg-white text-black'
                }`}
              >
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative z-10 w-full max-w-[800px] overflow-hidden">
            {/* Mobile background */}
            <Image
              src="/testimonialbgmobile.svg"
              alt="Mobile Testimonial Background"
              fill
              className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none block md:hidden z-0"
            />

            <div
              ref={containerRef}
              className="flex transition-transform duration-500 ease-in-out gap-4 my-10 relative"
              style={{
                transform: `translateX(-${current * (CARD_WIDTH + GAP)}px)`,
              }}
            >
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 w-[300px] md:w-[350px] flex justify-center items-center"
                >
                  <div className="relative w-full p-6 pt-8 rounded-2xl bg-[#2C2C2C] overflow-hidden text-white h-full flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    </div>
                    <p className="text-base text-start leading-relaxed mb-6 px-1">
                      {item.text}
                    </p>
                    <div className="w-full h-px bg-white/20 my-2"></div>
                    <div className="flex items-center justify-between w-full mt-4">
                      <div className="text-start">
                        <div className="text-base font-semibold">{item.name}</div>
                        <div className="text-sm text-white/60">{item.location}</div>
                      </div>
                      <div className="flex items-center">
                        <Image src="/fivestar.png" alt="Rating" width={100} height={20} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
