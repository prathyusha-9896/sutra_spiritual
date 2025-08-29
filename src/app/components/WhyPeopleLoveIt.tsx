'use client';

import Image from 'next/image';

const FEATURES = [
  {
    title: 'No waiting — report delivered on WhatsApp in 3 Hours',
    icon: '/icon1.svg',
    bg: '#FE5957',
  },
  {
    title: 'Based on your photo, name & DOB — no complicated questions',
    icon: '/icon2.svg',
    bg: '#0FBDDF',
  },
  {
    title: 'Easy-to-read PDF — no jargon or astrology charts',
    icon: '/icon3.svg',
    bg: '#F8E947',
  },
  {
    title: 'Done personally, not AI-generated',
    icon: '/icon4.svg',
    bg: '#7938BA',
  },
  {
    title: 'Private, safe, and 100% confidential',
    icon: '/icon5.svg',
    bg: '#B3E04D',
  },
];

export default function WhyPeopleLoveIt() {
  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 py-20 text-center items-center justify-center flex flex-col">
      <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold mb-12">
        Why People Love It
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16 max-w-6xl mx-auto">
        {FEATURES.map((item, index) => {
          const isLast = index === FEATURES.length - 1;
          const isOdd = FEATURES.length % 2 !== 0;

          return (
            <div
              key={index}
              className={`relative h-[200px] sm:h-[220px] rounded-xl text-white flex flex-col items-center justify-center text-sm sm:text-base lg:text-[16px] px-4 text-center
                ${
                  isLast && isOdd
                    ? 'col-span-1 lg:col-span-1 flex justify-center'
                    : ''
                }`}
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.icon}
                alt={`icon-${index}`}
                width={40}
                height={40}
                className="mb-3"
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>

      {/* Offer Box */}
      <div className="text-left text-white bg-[#0FBDDF] max-w-6xl mx-auto rounded-xl overflow-hidden px-6 sm:px-12 py-10">
        <div className="flex md:flex-row flex-col justify-between items-center w-full gap-10">
          <div className="max-w-2xl z-10 md:text-left text-center">
            <h3 className="text-3xl sm:text-4xl lg:text-[48px] leading-[140%] font-bold mb-2">
              Today Only
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold mb-4">
              Get Your Aura Scan Report for ₹499
            </h2>
            <p className="text-sm sm:text-base lg:text-[20px] mb-1">
              Regular Price ₹1,499 — 65% OFF
            </p>
            <p className="text-sm sm:text-base lg:text-[20px] text-[#FFFFFF] mb-6">
              Offer available for the next 100 people only.
            </p>
          </div>

          <button onClick={() => window.location.href = "https://rzp.io/rzp/w608lnD"}
            className="text-black text-[12px] bg-[#ffffff] sm:text-[14px] lg:text-[14px] font-bold leading-[150%] z-10 rounded-md px-6 py-2 shadow-sm hover:opacity-90 transition relative overflow-hidden"
          >
            Get My Aura Report Now
          </button>
        </div>
      </div>
    </section>
  );
}
