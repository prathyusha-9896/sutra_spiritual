'use client';

import Image from 'next/image';

const FEATURES = [
  {
    title: 'Your Aura Colour',
    description: 'Your Aura Colour — and what it says about your emotional and spiritual state',
    icon: 'Image1.svg',
  },
  {
    title: 'Hidden Energy Blocks',
    description: 'Hidden Energy Blocks — what’s holding you back in love, career, or health',
    icon: 'Image2.svg',
  },
  {
    title: 'Vibrational Frequency',
    description: 'Your Current Vibrational Frequency and how to raise it',
    icon: '/Image3.svg',
  },
  {
    title: 'Healing Remedies',
    description: 'Healing Remedies — tailored crystals, colours, and practices to rebalance',
    icon: '/Image4.svg',
  },
  {
    title: 'Message',
    description: 'One Clear Message your aura is sending you right now',
    icon: '/Image5.svg',
  },
];

export default function DiscoverSection() {
  return (
    <section className="bg-black text-white  px-[70px] py-16 text-center">
      <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-bold mb-2">What You’ll Discover</h2>
      <p className="text-sm sm:text-base lg:text-[16px] text-[#D9D9D9] mb-10">
        In your personalised Aura Report, you’ll uncover:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {FEATURES.map((item) => (
          <div key={item.title} className="flex flex-col items-center text-center px-2">
            <div className="w-20 h-20 mb-4 relative">
              <Image
                src={item.icon}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold mb-2 text-base lg:text-[20px]">{item.title}</h3>
            <p className="text-sm sm:text-base lg:text-[16px] text-[#D9D9D9]">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm sm:text-base lg:text-[16px] text-[#D9D9D9] max-w-xl mx-auto">
        All this from just a photo and your date of birth.<br />
        Prepared manually and delivered with care — within 3 Hours
      </p>
    </section>
  );
}
