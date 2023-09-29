import { useState } from "react"

type ProjectShowType = {
  name: string,
  link: string,
  image: string,
  images: string[],
  index: number
}

export const ProjectShow = ({ name, link, image, images, index }: ProjectShowType) => {
  return (
    <>
      <a href={link} target="_blank" key={index} className="project-container-a">
        <li
          className="project-item"
        >
          <img src={image} alt={name} />
          <div className={'project-container-text'}
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
