import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import projects from "./projectsData"; // ✅ make sure this matches your file name

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 mt-[100px]">
      <ProjectsText />
      <div className="flex flex-col gap-24 mt-12">
        {projects.map((project, index) => (
          <SingleProject
            key={index}
            project={project} // ✅ pass whole project object
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
