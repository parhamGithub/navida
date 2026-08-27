import ProjectCardDesktop from "../components/projects/projectCardDesktop";
import ProjectCardMobile from "../components/projects/projectCardMobile";
import ProjectsHeader from "../components/projects/projectsHeader";
import { PROJECTS } from "../data/content";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHeader />
      {PROJECTS.map((project, i) => (
        <div key={project.num} className={i > 0 ? "border-t border-line" : ""}>
          <div className="hidden lg:block">
            <ProjectCardDesktop project={project} />
          </div>
          <div className="block lg:hidden">
            <ProjectCardMobile project={project} />
          </div>
        </div>
      ))}
    </main>
  );
}

