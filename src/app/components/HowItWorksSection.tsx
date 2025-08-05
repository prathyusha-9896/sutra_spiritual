'use client';

import Image from 'next/image';

const STEPS = [
  {
    icon: '/icon6.svg',
    title: 'Click “Get My Aura Report” & Make Payment (₹499)',
  },
  {
    icon: '/icon7.svg',
    title: 'Fill a Short Form: Upload your photo, name & DOB',
  },
  {
    icon: '/icon8.svg',
    title: 'Receive Your Personal Report on WhatsApp within 3 Hours',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 py-16 text-center">
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-[140%] font-bold mb-2">How It Works</h2>
      <p className="text-sm sm:text-base lg:text-[20px] text-[#FFFFFF] mb-10">No calls. No pressure. Just pure insight.</p>

      {/* Icons Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {STEPS.map((step, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center text-sm px-4">
            <div className="w-16 h-16 mb-4 relative">
              <Image src={step.icon} alt={`step-${index}`} fill className="object-contain" />
            </div>
            <p className="text-base sm:text-[20px] lg:text-[24px] text-[#FFFFFF]">{step.title}</p>
          </div>
        ))}
      </div>

      {/* Tap to Begin CTA Card */}
                  <div className="relative text-left text-white  max-w-6xl mx-auto rounded-xl overflow-hidden px-6 sm:px-12 py-20">
                    <div className="absolute inset-0  z-0" />
                    <Image
                      src="redbg_tap.svg"
                      alt="Tap-bg"
                      fill
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    />
                    <div className='flex md:flex-row flex-col justify-between items-center w-full'>
                    <div className="max-w-3xl z-10 md:text-left text-center">
                      <h3 className="text-3xl sm:text-4xl lg:text-[48px] leading-[140%] font-bold mb-2">Tap to Begin</h3>
                      <p className="text-sm sm:text-base lg:text-[20px] mb-1">Get a personal aura scan that finally gives you answers, clarity, and peace of mind.</p>
                      <p className="text-sm sm:text-base lg:text-[20px] mb-1">₹499 – Get My Aura Report Now</p>
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
