"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[52rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I am <span className=" font-bold">Zabir Mohammad</span>, a{" "}
        <span className=" font-medium">BSc</span>{" "}
        <span className="font-bold">Computer Science and Engineering</span>{" "}
        graduate student at the{" "}
        <span className="font-medium">
          Bangladesh University of Business and Technology
        </span>
        ,with a dynamic focus on{" "}
        <span className="font-bold">AI/ML Research</span>. My academic pursuits
        revolve around{" "}
        <span className=" font-medium underline">
          deep learning algorithms, pattern recognition, computer vision, and
          Signal Precessing
        </span>
        .Recognized for my impactful publications, I am committed to pushing the
        boundaries of technology and continuously seek new horizons in research.
      </p>

      <p>
        Proficient in prominent frameworks such as{" "}
        <span className="font-medium">
          TensorFlow, Keras, PyTorch, NumPy, and Matplotlib
        </span>
        , I leverage my expertise to delve into diverse areas of{" "}
        <span className="font-medium">machine learning and deep learning</span>
        .In addition to my research endeavors, I am a Competitive Programmer,
        passionate about mastering fundamental algorithms including{" "}
        <span className="underline">
          data structures, dynamic programming, and game theory.
        </span>
      </p>
      <p>
        My goal is to contribute meaningfully to the advancement of artificial
        intelligence while inspiring others through my work
      </p>
    </motion.section>
  );
}
