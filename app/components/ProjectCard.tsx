import React from "react";
import Link from "next/link";
import Image from "next/image";

import "./project-card.scss";
import { TCardProps } from "../types";

const ProjectCard = (props: TCardProps) => (
  <div className="card">
    <h2 className="cardTitle">{props.title}</h2>
    <div className="cardImage">
      <Image
        fill
        src={props.imgSrc}
        alt="Project"
        placeholder="blur"
        blurDataURL={props.blurredDataUrl}
      />
    </div>
    <p className="cardText">
      <strong>Tools: </strong>
      {props.tools}
    </p>
    <div className="cardButtonWrapper">
      <Link className="cardButton" href={`/project-details/${props.slug}`}>
        Details
      </Link>
      {props.url !== null && (
        <a
          className="cardButton"
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
