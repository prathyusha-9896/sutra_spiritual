'use client';

import Image from 'next/image';

const FEATURES = [
  {
    title: 'No waiting — report delivered on WhatsApp in 3 Hours',
    icon: '/icon1.svg',
    bg: '/redcard.svg',
  },
  {
    title: 'Based on your photo, name & DOB — no complicated questions',
    icon: '/icon2.svg',
    bg: '/bluecard.svg',
  },
  {
    title: 'Easy-to-read PDF — no jargon or astrology charts',
    icon: '/icon3.svg',
    bg: '/yellowcard.svg',
  },
  {
    title: 'Done personally, not AI-generated',
    icon: '/icon4.svg',
    bg: '/violetcard.svg',
  },
  {
    title: 'Private, safe, and 100% confidential',
    icon: '/icon5.svg',
    bg: '/greencard.svg',
  },
];

export default function WhyPeopleLoveIt() {
  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 py-20 text-center">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold mb-12">Why People Love It</h2>

    {/* Features Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16 max-w-6xl mx-auto">
    {FEATURES.map((item, index) => (
        <div
        key={index}
        className="relative w-full h-[200px] sm:h-[220px] rounded-xl text-white flex flex-col items-center justify-center text-sm sm:text-base lg:text-[16px] px-4 text-center"
        style={{
            backgroundImage: `url(${item.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
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
    ))}
    </div>


      {/* Today Offer Box */}
      <div className="relative text-left text-white  max-w-6xl mx-auto rounded-xl overflow-hidden px-6 sm:px-12 py-10">
        <div className="absolute inset-0  z-0" />
        <Image
          src="/background.svg"
          alt="today-bg"
          fill
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />
        <div className='flex md:flex-row flex-col justify-between items-center w-full'>
        <div className="max-w-2xl z-10 md:text-left text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-[48px] leading-[140%] font-bold mb-2">Today Only</h3>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold mb-4">
            Get Your Aura Scan Report for ₹499
          </h2>
          <p className="text-sm sm:text-base lg:text-[20px] mb-1">Regular Price ₹1,499 — 65% OFF</p>
          <p className="text-sm sm:text-base lg:text-[20px] text-[#FFFFFF] mb-6">Offer available for the next 100 people only.</p>
        </div>
        
        <button
        className="text-black text-[12px] sm:text-[14px] lg:text-[14px] font-bold leading-[150%] z-10 rounded-md px-6 py-2 shadow-sm hover:opacity-90 transition relative overflow-hidden"
        style={{
            backgroundImage: 'url("/buttonbg.svg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor:'white',
        }}
        >
        Get My Aura Report Now
        </button>
        </div>

      </div>
    </section>
  );
}
