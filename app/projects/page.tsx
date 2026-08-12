"use client";

import ProjectCardDesktop from "../components/projects/projectCardDesktop";
import ProjectCardMobile from "../components/projects/projectCardMobile";
import ProjectsHeader from "../components/projects/projectsHeader";
import useMediaQuery from "../hooks/useMediaQuery";
import { PROJECTS } from "../data/content";

const DESKTOP_QUERY = "(min-width: 1024px)";

export default function ProjectsPage() {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  return (
    <main>
      <ProjectsHeader />
      {PROJECTS.map((project) =>
        isDesktop === null ? null : isDesktop ? (
          <ProjectCardDesktop key={project.num} project={project} />
        ) : (
          <ProjectCardMobile key={project.num} project={project} />
        )
      )}
    </main>
  );
}