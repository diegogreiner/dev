import { useState } from "react"

type ProjectShowType = {
  name: string,
  link: string,
  image: string,
  images: string[],
  index: number
}

export const ProjectShow = ({ name, link, image, images, index }: ProjectShowType) => {
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <a href={link} target="_blank" key={index}>
        <li
          className="project-item"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={image} alt={name} />
          <div
            className={
              hoveredIndex === index ? 'project-container-text hidden' : 'project-container-text'
            }
          >
            <h1 className="project-title">{name}</h1>
            <div className="project-skill">
              {images && images.map((img, index) => (
                <img key={index} src={img} alt={`Imagem ${index + 1}`} />
              ))}

            </div>
          </div>
          <div className="border-bottom"></div>
        </li>
      </a>
    </>
  );
};
