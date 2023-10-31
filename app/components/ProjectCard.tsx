import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./project-card.scss";
import { TCardProps } from "../../types";

const ProjectCard = (props: TCardProps) => (
  <div className="card">
    <h2 className="cardTitle">{props.title}</h2>
    <div className="cardImage">
      <Image fill src={props.altImg} alt="Project" />
    </div>
    <p className="cardText">
      <strong>Tools: </strong>
      {props.tools}
    </p>
    <div className="buttonWrapper">
      <Link className="button" href={`/project-details/${props.slug}`}>
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
