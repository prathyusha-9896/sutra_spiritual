'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

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

  const CARD_WIDTH = 350; // Fixed width for card
  const GAP = 16; // Tailwind gap-4 ~ 1rem = 16px

  const visibleCards = 2.15;

  const next = () => {
    if (current < testimonials.length - 1) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:pl-20">
      <div className="relative w-full ">
        {/* Background */}
        <Image
          src="/testimonialbg.svg"
          alt="Connect Background"
          fill
          className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:block hidden" 
          priority
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-20 min-h-[720px] w-full">
          {/* Left */}
          <div className="text-center w-full max-w-md lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold text-[#FFFFFF] mb-4">What they say about us</h2>
            <p className="text-sm sm:text-base lg:text-[20px] text-[#FFFFFF] leading-[28px] mb-6">
              Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci. Nunc urna, vitae sit sapien diam diam cursus. Cras tempus venenatis consequat.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button onClick={prev} className="w-10 h-10 sm:w-20 sm:h-20 relative">
                <Image src="/Previous.png" alt="Previous" fill />
              </button>
              <button onClick={next} className="w-10 h-10 sm:w-20 sm:h-20 relative">
                <Image src="/Next.png" alt="Next" fill />
              </button>
            </div>
          </div>

          {/* Right - Carousel */}
          <div
            ref={containerRef}
            className="w-full max-w-[800px] overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${current * (CARD_WIDTH + GAP)}px)`,
                width: `${testimonials.length * (CARD_WIDTH + GAP)}px`,
              }}
            >
              {testimonials.map((item, index) => (
              <div
                key={index}
                className="shrink-0 md:w-[350px] w-[300px] flex justify-center items-center"
              >
                <div
                  className="relative w-full p-6 pt-8 rounded-2xl overflow-hidden text-white h-full flex flex-col items-center text-center"
                  style={{
                    backgroundImage: `url('/red.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base text-start leading-relaxed mb-6 px-1">
                    {item.text}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-white/20 my-2"></div>
                    <div className="flex items-center justify-between w-full mt-4">
                      {/* Name & Location - aligned to left */}
                      <div className="text-start">
                        <div className="text-base font-semibold">{item.name}</div>
                        <div className="text-sm text-white/60">{item.location}</div>
                      </div>

                      {/* Stars - aligned to right */}
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
