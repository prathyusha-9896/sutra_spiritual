'use client';

import { useState } from 'react';
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

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-black py-12 pl-4">
      <div className="max-w-[1420px] mx-auto relative text-white">
        {/* Card with background */}
        <div className="relative rounded-xl overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-10 min-h-[460px] md:min-h-[720px]">
          {/* Background */}
          <Image
            src="/testimonialbg.svg"
            alt="Connect Background"
            fill
            className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none"
            priority
          />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">What they say about us</h2>
              <p className="text-gray-300 mb-6">
                Elit quam eros sollicitudin ridiculus commodo a eget. Quisque magna tempus urna lectus...
              </p>
              <div className="flex gap-4">
                <button onClick={prev} className="w-10 h-10 sm:w-20 sm:h-20 relative">
                  <Image src="/Previous.png" alt="Previous" fill />
                </button>
                <button onClick={next} className="w-10 h-10 sm:w-20 sm:h-20 relative">
                  <Image src="/Next.png" alt="Next" fill />
                </button>
              </div>
            </div>

            {/* Right Cards Section */}
            <div className="w-full lg:w-2/3 min-h-[400px] overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                  width: `${testimonials.length * 100}%`,
                }}
              >
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex justify-center items-center sm:w-[350px] shrink-0 p-4"
                  >
                    <div
                      className="relative w-full h-full p-6 rounded-xl overflow-hidden text-white"
                      style={{
                        backgroundImage: `url('/red.png')`,
                        backgroundSize: 'cover',
                      }}
                    >
                      <div className="mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={48}
                          height={48}
                          className="rounded-full mx-auto"
                        />
                      </div>
                      <p className="text-sm mb-6 text-center">“{item.text}”</p>
                      <div className="text-sm font-semibold text-center">{item.name}</div>
                      <div className="text-xs text-gray-400 text-center">{item.location}</div>
                      <div className="flex justify-center mt-2">
                        <Image src="/fivestar.png" alt="Rating" width={80} height={16} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
