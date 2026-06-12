import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, link }) => {

  return (

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-link"
    >

      <div className="proj-card">

        <img
          src={imgUrl}
          alt={title}
          className="proj-img"
        />

        <div className="proj-content">

          <h4>{title}</h4>

          <span>{description}</span>

        </div>

      </div>

    </a>

  );

};