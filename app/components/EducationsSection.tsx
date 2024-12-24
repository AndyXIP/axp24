import EducationSection from './EducationSection';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-4">
        <h2 className="text-2xl text-gray-900 dark:text-gray-200">Projects</h2>
        <EducationSection
            degree="MSc Computing"
            institution="Imperial College London"
            link="https://www.imperial.ac.uk/study/courses/postgraduate-taught/computing/"
            duration="2024 - 2025"
            details="Relevant modules: Databases, Algorithms, Software Engineering."
        />
        <EducationSection
            degree="BSc Chemistry with Mathematics"
            institution="University College London"
            link="https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/chemistry-mathematics-bsc"
            duration="2021 - 2024"
            details="Relevant modules: Programming for Chemists, Mathematics for Scientists."
        />
    </section>
  );
};

export default ProjectsSection;
