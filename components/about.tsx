'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 '>
        I am a dedicated and self-driven Full-Stack Developer based in{' '}
        <span className='font-bold'>Mumbai,India</span>, with a strong
        foundation in both{' '}
        <span className='font-bold'> frontend and backend technologies. </span>
        Holding both a bachelor's and a master's degree in computer science,
        I've honed my skills through hands-on projects and continuous learning.
        My passion for coding drives me to explore new technologies and deliver
        high-quality solutions. I thrive in collaborative environments and am
        always eager to take on challenging projects. With a focus on creating
        efficient, scalable applications, I aim to make a positive impact in the
        tech world.
      </p>
    </motion.section>
  );
}

export default About;
