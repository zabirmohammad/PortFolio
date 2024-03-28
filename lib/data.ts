import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import ensemble from "@/public/ensemble.png";
import self_writer from "@/public/self_writer.png";
import u_writer from "@/public/u_writer.png";
import signature from "@/public/signature.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Researcher",
    location: "Dhaka, Bangladesh",
    description:
      "Department of Deep Learning and Computer Vision, Advanced Machine Intelligence Research Lab.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
  },
  {
    title: "Adjunct Co-Investigator",
    location: "Jeddah, Saudi Arabia.",
    description:
      "Dept. of Information Technology, King Abdul Aziz University,& Jeddah, Saudi Arabia.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Research Assistant",
    location: "Bangladesh University of Business and Technology, Bangladesh",
    description:
      "Government Project in collaboration with Bangladesh University of Business and Technology and Reve Systems, Bangladesh",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
] as const;

export const projectsData = [
  {
    title:
      "Self-Writer: Clusterable Embedding Based Self-Supervised Writer Recognition from Unlabeled Data",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: self_writer,
  },
  {
    title:
      "AnEnhanced Ensemble Deep Neural Network Approach for Elderly Fall Detection System Based on Wearable Sensors",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: ensemble,
  },
  {
    title:
      "An Unsupervised Writer Identification Based on Generating Clusterable Embeddings",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: u_writer,
  },
  {
    title:
      "An Offline Writer-independent Signature Verification System using AutoEmbedder",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: signature,
  },
] as const;

export const skillsData = [
  "Keras",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Pytourch",
  "Albumentation",
  "Python",
  "C/C++",
  "Java",
  "Git",
  "Latex",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind",
  "MySQL",
] as const;
