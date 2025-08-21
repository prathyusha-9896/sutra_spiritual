'use client';

import Image from 'next/image';

export default function AuraHero() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-[1420px] mx-auto relative text-white">
        {/* Card with background */}
        <div className="relative rounded-xl overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-10 min-h-[860px] md:min-h-[720px]">
          {/* Background */}
          <Image
            src="/main.svg"
            alt="Connect Background"
            fill
            className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:block hidden"
            priority
          />
          <Image
            src="/mainmobilebg.svg"
            alt="Connect Background"
            fill
            className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:hidden block"
            priority
          />

          {/* Content */}
          <div className="relative md:pt-20 z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
            {/* Left Content */}
            <div className="w-full max-w-3xl space-y-5 text-center md:text-left">
              <h2 className="text-3xl font-fraunces sm:text-4xl lg:text-[52px] font-bold leading-snug sm:leading-[120%] lg:leading-[150%]">
                What Is Your Aura Trying <br className="hidden sm:block" /> To Tell You?
              </h2>

              <p className="font-poppins text-base sm:text-lg lg:text-[20px] font-medium leading-relaxed text-gray-200">
                Uncover the emotional and energetic blocks that are silently<br className="hidden sm:block" /> shaping your life.
              </p>
              <p className="font-poppins text-base sm:text-lg lg:text-[20px] font-medium leading-relaxed text-gray-200">
                Your aura holds the answers. Get a deeply personal aura <br className="hidden sm:block" /> scan and report, based on your photo and energy field.
              </p>

              <div className="inline-flex w-full md:flex-row flex-col justify-center items-center md:items-start gap-4 bg-[#020725]/80 border border-[#020725]/40 rounded-lg md:px-6 px-2 py-4 md:w-fit backdrop-blur">
                <div className="text-sm sm:text-base text-white">
                  <span className="block font-medium frances-font text-[24px] leading-[32px]">Limited-Time Offer</span>
                  <span className="text-[16px] leading-[24px] text-[#FFFFFFCC] font-poppins">
                    Today&apos;s orders get their report <br /> delivered within 3 hours
                  </span>
                </div>
                <div className="bg-[#FE5957] frances-font text-white md:px-4 px-2 py-2 rounded-md text-[24px] leading-[32px] font-bold text-center whitespace-nowrap">
                  ₹499 Only<br />
                  <span className="text-[24px] leading-[32px] font-bold text-white">(Regular Price ₹1,499)</span>
                </div>
              </div>
            </div>

            {/* Right Illustration (optional) */}
            {/* 
            <div className="w-full md:w-[300px]">
              <Image
                src="/aura.svg"
                alt="Aura Illustration"
                width={300}
                height={300}
                className="w-full h-auto object-contain"
                priority
              />
            </div> 
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
