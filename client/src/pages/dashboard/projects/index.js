import CreateProjectBtn from 'components/Projects/CreateProjectBtn';
import ProjectsPaginator from 'components/Projects/Paginator';
import DashboardLayout from 'layouts/DashboardLayout';

const ProjectConsole = () => {
  return (
    <div className='project-console'>
      <div className='project-console__title'>My Projects</div>
      <div className='polygon-border' />
      <div className='project-console__projects'>
        <CreateProjectBtn />
      </div>
      <ProjectsPaginator />
    </div>
  );
};

ProjectConsole.Layout = DashboardLayout;

export default ProjectConsole;
