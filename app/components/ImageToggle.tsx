"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronRight } from "react-icons/fa";

import "./image-toggle.scss";

const ImageToggle = ({ title, src }: { title: string; src: string }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  //! useReducer here to determine which image to show.
  //! Give each item an ID, and filter to show the right image per buitton click.
  //! Make the button list and images seperate components. Manage state here.
  return (
    <div className="imageToggleWrapper">
      <div className="buttonWrapper">
        <button
          className="imageButton"
          onClick={() => setToggleOpen(!toggleOpen)}
        >
          {toggleOpen ? (
            <FaChevronCircleRight className="buttonIcon" />
          ) : (
            <FaChevronRight className="buttonIcon" />
          )}
          {title}
        </button>
      </div>
      <div className="imageWrapper">
        {toggleOpen ? (
          <Image
            height={1200}
            width={1200}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            src={src}
            alt="Project"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ImageToggle;
