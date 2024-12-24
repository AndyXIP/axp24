import ProjectSection from './ProjectSection';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-4">
      <h2 className="text-2xl text-gray-900 dark:text-gray-200">Projects</h2>
      <ProjectSection
        title="MassPySpec"
        link="https://github.com/AndyXIP/MassPySpec"
        description="Created a Python program that analyzed mass spectroscopy data and outputted possible chemical formulas."
        additionalDetails="Programming for Chemists"
      />
      <ProjectSection
        title="Interactive Web App"
        link="https://github.com/w-foster/sse-team-project-1"
        description="Worked with a team to create a frontend in React and a backend in Flask for an interactive web app."
        additionalDetails="Software Systems Engineering"
      />
    </section>
  );
};

export default ProjectsSection;
