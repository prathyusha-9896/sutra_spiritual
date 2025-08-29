'use client';

import Image from 'next/image';

export default function ConnectSection() {
  return (
    <section className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto relative text-white">
        {/* Card with background */}
        <div className="relative rounded-xl overflow-hidden px-6 md:py-10 py-4 min-h-[740px] md:min-h-[420px]">
          {/* Background */}
          <Image
            src="/connectbackground.svg"
            alt="Connect Background"
            fill
            className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:block hidden"
            priority
          />
          <Image
            src="/connectmobile.svg"
            alt="Connect Background"
            fill
            className="absolute inset-0 object-cover w-full h-full pointer-events-none select-none md:hidden block"
            priority
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:pt-9">
            {/* Left Content */}
            <div className="w-full max-w-2xl space-y-2 text-left">
              <h2 className="text-[32px] lg:text-[42px] leading-[140%] font-bold text-[#FFFFFF]">
                Connect us for Aura Report
              </h2>
              <p className="text-[18px]  md:text-[20px] text-[#FFFFFF] leading-[28px] frances-font">
                You came here for a reason.<br />
                Your energy wants to be seen, heard, and healed...
              </p>
              <p className="font-semibold text-[18px]  md:text-[24px] text-[#FFFFFF]">Don’t ignore the signs.</p>
              <p className="text-[18px]  md:text-[20px] text-[#FFFFFF] leading-[28px]">
                Start your aura scan today — before this limited-time ₹499 offer ends.
              </p>

                    <button onClick={() => window.location.href = "https://rzp.io/rzp/w608lnD"}
                    className="text-black text-[12px] mt-2 bg-[#ffffff] sm:text-[14px] lg:text-[14px] font-bold leading-[150%] z-10 rounded-md px-6 py-2 shadow-sm hover:opacity-90 transition relative overflow-hidden"
                    // style={{
                    //     backgroundImage: 'url("/buttonbg.svg")',
                    //     backgroundSize: 'cover',
                    //     backgroundPosition: 'center',
                    //     backgroundRepeat: 'no-repeat',
                    //     backgroundColor:'white',
                    // }}
                    >
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
