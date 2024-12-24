import ProjectsSection from './components/ProjectsSection';
import EducationsSection from './components/EducationsSection';
import SkillsSection from './components/SkillsSection';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section id="about">
          <h2 className="text-2xl text-gray-900 dark:text-gray-200">About Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A current postgraduate student pursuing a{" "}
            <a href="https://www.imperial.ac.uk/study/courses/postgraduate-taught/computing/" className="text-indigo-600 dark:text-indigo-400">
              MSc Computing
            </a>{" "}
            degree at{" "}
            <a href="https://www.imperial.ac.uk/" className="text-indigo-600 dark:text-indigo-400">
              Imperial College London
            </a>.
          </p>
        </section>

        <SkillsSection />
        <ProjectsSection />
        <EducationsSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-700 dark:text-gray-300">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}