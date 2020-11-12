import CreateProjectBtn from "components/Projects/CreateProjectBtn";
import DashboardLayout from "layouts/DashboardLayout";

const ProjectConsole = () => {
  return (
    <div className="project-console">
      <div className="project-console__title">My Projects</div>
      <div className="polygon-border" />
      <CreateProjectBtn />
    </div>
  );
};

ProjectConsole.Layout = DashboardLayout;

export default ProjectConsole;
