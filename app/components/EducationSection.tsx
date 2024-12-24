import Description from './Description';

interface EducationProps {
  degree: string;
  institution: string;
  link: string;
  duration: string;
  details: string;
}

const EducationSection = ({ link, degree, institution, duration, details }: EducationProps) => {
  return (
    <section className="py-4">
      <h3 className="text-lg text-gray-900 dark:text-gray-200">
        <a href={link} className="text-indigo-600 dark:text-indigo-400">{degree}</a> - {institution}</h3>
      <p className="text-gray-700 dark:text-gray-300">{duration}</p>
      <Description text={details} />
    </section>
  );
}

export default EducationSection;
