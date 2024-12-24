import Description from './Description';

interface ProjectProps {
  title: string;
  link: string;
  additionalDetails: string;
  description: string;
}

const ProjectSection = ({ title, link, description, additionalDetails }: ProjectProps) => {
  return (
    <section className="py-4">
      <h3 className="text-xl text-gray-900 dark:text-gray-200">
        <a href={link} className="text-indigo-600 dark:text-indigo-400">{title}</a>
      </h3>
      <Description text={description} />
      <Description text={additionalDetails} />
    </section>
  );
}

export default ProjectSection;
