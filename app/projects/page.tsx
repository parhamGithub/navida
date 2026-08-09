import ProjectCard from "../components/projects/projectCard";
import { PROJECTS } from "../data/content";

export default function ProjectsPage() {
  return (
    <main className="pb-5 px-5 lg:px-1">
      {PROJECTS.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </main>
  );
}
