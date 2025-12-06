import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="proj-link">
        <div 
          className="proj-imgbx" 
          style={{
            width: "100%",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img 
            src={imgUrl} 
            alt={title}
            style={{
              width: "100%",
              height: "220px",      
              objectFit: "cover",  
              borderRadius: "20px", 
              display: "block"
            }}
          />

          <div className="proj-txtx" style={{ padding: "15px" }}>
            <h4 style={{ color: '#fff' }}>{title}</h4>
            <span style={{ color: '#fff' }}>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
};
