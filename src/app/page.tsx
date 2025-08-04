'use client';

import AuraHero from './components/AuraHero';
import ConnectSection from './components/ConnectSection';
import DiscoverSection from './components/DiscoverSection';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';
import Header from './components/Header';
import HowItWorksSection from './components/HowItWorksSection';
import StuckSection from './components/StuckSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import WhyPeopleLoveIt from './components/WhyPeopleLoveIt';

export default function Page() {
  return (
    <>
      <Header/>
      <AuraHero />
      <StuckSection/>
      <DiscoverSection/>
      <TestimonialsSlider/>
      <WhyPeopleLoveIt/>
      <HowItWorksSection/>
      <FaqAccordion/>
      <ConnectSection/>
      <Footer/>
    </>
  );
}
