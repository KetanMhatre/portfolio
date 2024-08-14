import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import nextjsStoreImg from '@/public/next-js-store.png';
import cinemaniaImg from '@/public/cinemania.png';
import portfolioImg from '@/public/portfolio.png';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    company: 'ALTISSADVANCE TECH PRIVATE LIMITED',
    title: 'Front-End Developer',
    location: 'Mumbai, India',
    description:
      'I worked as a front-end developer intern for three months. During this time, I gained hands-on experience and improved my skills in web development',
    icon: React.createElement(FaReact),
    date: 'Jan 2024 - Mar 2024',
  },
  {
    company: '',
    title: 'Graduated From University',
    location: 'Mumbai, India',
    description:
      'I completed my Masters in Computer Science from Mumbai University with a CGPA of 7.44. The program helped me build a good understanding of computer science concepts',
    icon: React.createElement(LuGraduationCap),
    date: '2024',
  },
] as const;

export const projectsData = [
  {
    title: 'Next Js Store',
    description:
      'This project is a modern and responsive e-commerce platform built with Next.js, Tailwind CSS, and a variety of powerful libraries.',
    tags: ['Next.js', 'React', 'Typescript', 'Supabase', 'Clerk', 'Prisma'],
    imageUrl: nextjsStoreImg,
    projectUrl: '',
  },
  {
    title: 'Cinemania',
    description:
      'Cinemania is a modern React-based movie application that allows users to browse and discover movies.',
    tags: ['React', 'Javascript', 'SCSS', 'Vite'],
    imageUrl: cinemaniaImg,
    projectUrl: '',
  },
  {
    title: 'Personal Portfolio',
    description:
      'This is a personal portfolio project built with Next.js and TypeScript ',
    tags: ['Next.js', 'React', 'Typescript', 'Framer motion', 'Resend'],
    imageUrl: portfolioImg,
    projectUrl: '',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Bootstrap',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
] as const;
