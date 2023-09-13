import { SkillData } from "../data/skills"

import { useEffect, useRef, useState } from "react"

export const Skills = () => {

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
    <section id="skills">
      <div className={`container ${isScrolled ? 'animate-container' : 'opacity'}`}>
        <h1 className="text-title">
          Habilidades
          <div className={`bar-title ${isScrolled ? 'animate-bar-title' : ''}`}></div>
        </h1>
        <ul>
          <div className='skills-container-extern'>
            {SkillData.map((skill, index) => (
              <div key={index} className="skill-item">
                <li>
                  <h1 className="skill-title">{skill.name}</h1>
                  <img src={skill.image} alt={skill.name} />
                  <div className="border-bottom" ref={itemRef}></div>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </section>
  )
}