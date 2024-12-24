interface DescriptionProps {
    text: string;
  }
  
  const Description = ({ text }: DescriptionProps) => {
    return (
      <p className="text-gray-700 dark:text-gray-300">{text}</p>
    );
  }
  
  export default Description;
  