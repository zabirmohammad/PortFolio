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
    name: "Publications",
    hash: "#publications",
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
    authors:
      "Zabir Mohammad, Muhammad Mohsin Kabir, Muhammad Mostafa Monowar, Md Abdul Hamid, Muhammad Firoz Mridha",
    journal_name: "MDPI Mathematics",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: self_writer,
  },
  {
    title:
      "An Enhanced Ensemble Deep Neural Network Approach for Elderly Fall Detection System Based on Wearable Sensors",
    authors:
      "Zabir Mohammad, Arif Reza Anwary, Muhammad Firoz Mridha, Md Sakib Hossain Shovon, Michael Vassallo",
    journal_name: "MDPI Sensors",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: ensemble,
  },
  {
    title:
      "An Unsupervised Writer Identification Based on Generating Clusterable Embeddings",
    authors:
      "MF Mridha, Zabir Mohammad, Muhammad Mohsin Kabir, Aklima Akter Lima, Sujoy Chandra Das, Md Rashedul Islam, Yutaka Watanobe",
    journal_name: "Computer Systems Science & Engineering",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: u_writer,
  },
  {
    title:
      "An Offline Writer-independent Signature Verification System using AutoEmbedder",
    authors:
      "Zabir Mohammad, Israt Jahan, Md Mohsin Kabir, M Ameer Ali, MF Mridha",
    journal_name:
      "2021 24th International Conference on Computer and Information Technology (ICCIT), Bangladesh (IEEE).",
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
