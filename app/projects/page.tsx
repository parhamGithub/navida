import ProjectCard from "../components/projects/projectCard";
import ProjectsHeader from "../components/projects/projectsHeader";
import { PROJECTS } from "../data/content";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHeader />
      {PROJECTS.map((project) => (
        <ProjectCard key={project.num} project={project} />
      ))}
    </main>
  );
}
