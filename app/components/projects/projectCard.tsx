import ProjectImage from "./projectImage";
import type { Project } from "../../types";

export default function ProjectsPage({ project }: { project: Project }) {
  const { images, title } = project;

  return (
    <div className="h-screen pt-25 grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className="col-span-1 flex flex-col text-center justify-center">
        <h3 className="font-bold text-xl md:text-3xl" dir="ltr">
          ۰۱.
        </h3>
        <h2 className="font-bold text-6xl md:text-7xl leading-25 py-5">
          {title}
        </h2>
      </div>
      <div className="col-span-1 lg:col-span-3 grid md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <ProjectImage key={index} image={img.image} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}
