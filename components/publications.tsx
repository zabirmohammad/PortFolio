"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Publication from "./publication";
import { useSectionInView } from "@/lib/hooks";

export default function Publications() {
  const { ref } = useSectionInView("Publications", 0.5);

  return (
    <section ref={ref} id="publications" className="scroll-mt-28 mb-28">
      <SectionHeading>My Publications</SectionHeading>
      <div>
        {projectsData.map((publication, index) => (
          <React.Fragment key={index}>
            <Publication {...publication} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
