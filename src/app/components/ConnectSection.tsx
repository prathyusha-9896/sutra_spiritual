'use client';

import Image from 'next/image';

export default function ConnectSection() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto relative text-white">
        {/* Card with background */}
        <div className="relative rounded-xl overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 py-10 min-h-[360px] md:min-h-[420px]">
          {/* Background */}
          <Image
            src="/connect.svg"
            alt="Connect Background"
            fill
            className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:block hidden"
            priority
          />
          <Image
            src="/connectbgmobile.svg"
            alt="Connect Background"
            fill
            className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:hidden block"
            priority
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="w-full max-w-xl space-y-4 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Connect us for Aura Report
              </h2>
              <p className="text-sm sm:text-base leading-snug">
                You came here for a reason.<br />
                Your energy wants to be seen, heard, and healed...
              </p>
              <p className="font-semibold text-sm sm:text-base">Don’t ignore the signs.</p>
              <p className="text-sm sm:text-base">
                Start your aura scan today — before this limited-time ₹499 offer ends.
              </p>

              <button className="mt-4 bg-white text-black font-semibold text-sm sm:text-base px-5 py-2 rounded-md hover:bg-gray-200 transition w-full sm:w-fit">
                Get My Aura Report Now
              </button>
            </div>

            {/* Optional Right Illustration */}
            {/* 
            <div className="w-full md:w-[300px] hidden md:block">
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
