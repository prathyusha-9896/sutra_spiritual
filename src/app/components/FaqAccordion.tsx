'use client';

import { useState } from 'react';
import Image from 'next/image';

const FAQS = [
  {
    question: 'Is this based on astrology?',
    answer:
      'No. This is a personalised energy reading based on your aura field — not zodiac or star charts.',
  },
  {
    question: 'What do I need to submit?',
    answer: 'Just your name, date of birth, and a recent photo for your aura reading.',
  },
  {
    question: 'How long does it take?',
    answer: 'You’ll receive your report within 3 hours via WhatsApp.',
  },
  {
    question: 'Will it be accurate?',
    answer: 'Yes! These are manually prepared readings based on your unique energy.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Absolutely. All reports are kept 100% private and confidential.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-black text-white px-4 sm:px-8 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">FAQs</h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden relative transition-all duration-300"
            style={{
              backgroundImage: `url('/card.svg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left p-4 sm:p-6 font-semibold text-base sm:text-lg"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{openIndex === i ? '▲' : '▼'}</span>
            </button>

            {openIndex === i && (
              <div className="px-4 sm:px-6 pb-4 text-sm text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
