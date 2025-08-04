'use client';

import Image from 'next/image';

export default function StuckSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 md:px-16 py-16 bg-black text-white">
      {/* Left Image */}
      <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/stuckimg.png"
          alt="Feeling stuck illustration"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right Text Content */}
      <div className="w-full lg:w-1/2 max-w-3xl text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold mb-4">
          Ever felt stuck for no reason?
        </h2>
        <p className="text-sm sm:text-base lg:text-[16px] leading-[150%] font-medium text-[#D9D9D9] mb-2">
          Like something&apos;s off... but you can&apos;t explain it?
        </p>
        <p className="text-sm sm:text-base lg:text-[16px] leading-[150%] font-medium text-[#D9D9D9] mb-2">
          Maybe you’ve tried affirmations, journaling, even therapy — but still feel blocked.
        </p>
        <p className="text-sm sm:text-base lg:text-[16px] leading-[150%] font-medium text-[#D9D9D9] mb-2">
          The truth is, your energy field holds the answers.<br />
          And now, you can finally see it.
        </p>
      </div>
    </section>
  );
}
