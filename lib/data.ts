import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    tags: ["Abstract", "PDF", "Github", "See More"],
    link: "https://www.mdpi.com/2227-7390/10/24/4796",
    imageUrl: self_writer,
  },
  {
    title:
      "An Enhanced Ensemble Deep Neural Network Approach for Elderly Fall Detection System Based on Wearable Sensors",
    authors:
      "Zabir Mohammad, Arif Reza Anwary, Muhammad Firoz Mridha, Md Sakib Hossain Shovon, Michael Vassallo",
    journal_name: "MDPI Sensors",
    tags: ["Abstract", "PDF", "Github", "See More"],
    link: "https://www.mdpi.com/1424-8220/23/10/4774",
    imageUrl: ensemble,
  },
  {
    title:
      "An Unsupervised Writer Identification Based on Generating Clusterable Embeddings",
    authors:
      "MF Mridha, Zabir Mohammad, Muhammad Mohsin Kabir, Aklima Akter Lima, Sujoy Chandra Das, Md Rashedul Islam, Yutaka Watanobe",
    journal_name: "Computer Systems Science & Engineering",
    tags: ["Abstract", "PDF", "Github", "See More"],
    link: "https://cdn.techscience.cn/files/csse/2023/TSP_CSSE-46-2/TSP_CSSE_32977/TSP_CSSE_32977.pdf",
    imageUrl: u_writer,
  },
  {
    title:
      "An Offline Writer-independent Signature Verification System using AutoEmbedder",
    authors:
      "Zabir Mohammad, Israt Jahan, Md Mohsin Kabir, M Ameer Ali, MF Mridha",
    journal_name:
      "2021 24th International Conference on Computer and Information Technology (ICCIT), Bangladesh (IEEE).",
    tags: ["Abstract", "PDF", "Github", "See More"],
    link: "https://ieeexplore.ieee.org/abstract/document/9689780",
    imageUrl: signature,
  },
] as const;

export const skillsData = [
  "Keras",
  "TensorFlow",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Pytorch",
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

export const interest = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Signal Processing",
  "Self-Supervised Learning",
  "Generative Adversarial Network",
  "Reinforcement Learning",
  "Data Structure",
  "Algorithm",
] as const;
