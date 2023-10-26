import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./project-card.scss";

const ProjectCard = (props) => (
  <div className="card">
    <h2 className="cardTitle">{props.title}</h2>
    <picture>
      <source srcSet={props.img.default} type="image/webp" />
      <Image
        className="cardImage"
        width={400}
        height={400}
        src={props.altImg}
        alt="Project"
      />
    </picture>
    <p className="cardText">
      <strong>Tools: </strong>
      {props.tools}
    </p>
    <div className="buttonWrapper">
      <Link className="button" href={props.slug}>
        Details
      </Link>
      {props.url !== null && (
        <a
          className="button"
          href={props.url}
          type="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
