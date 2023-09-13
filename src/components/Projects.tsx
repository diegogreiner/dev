import { projectData } from "../data/ProjectAndSkills";
import { ProjectShow } from './ProjectShow';

import { useEffect, useRef, useState } from "react"

export const Projects = () => {

  const itemRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (itemRef.current) {
        const itemPosition = itemRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="projects">
      <div className={`container ${isScrolled ? 'animate-container' : 'opacity'}`}>
        <h1 className="text-title">
          Projetos
          <div className={`bar-title ${isScrolled ? 'animate-bar-title' : ''}`}></div>
        </h1>
        <ul>
          <div className="project-container-extern" ref={itemRef}>
            {projectData.map((project, index) => (
              <ProjectShow key={index}
                name={project.name}
                link={project.link}
                image={project.image}
                images={project.images}
                index={index}
              />
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};
