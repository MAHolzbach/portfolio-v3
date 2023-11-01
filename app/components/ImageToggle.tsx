"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronRight } from "react-icons/fa";

import "./image-toggle.scss";

const ImageButton = ({ data, toggleState, setOpenImage }: any) => {
  return (
    <button
      className="imageButton"
      onClick={() => {
        return setOpenImage({ id: data.id, src: data.src });
      }}
    >
      {data.title}
      {toggleState.id === data.id ? (
        <FaChevronCircleRight className="buttonIcon" />
      ) : (
        <FaChevronRight className="buttonIcon" />
      )}
    </button>
  );
};

const ImageToggle = ({ images }: any) => {
  const [toggleState, setToggleOpen] = useState({ id: "", src: "" });

  return (
    <div className="imageToggleWrapper">
      <div className="buttonWrapper">
        {images.map((image: any) => (
          <ImageButton
            key={image.id}
            data={image}
            toggleState={toggleState}
            setOpenImage={setToggleOpen}
          />
        ))}
      </div>

      <div className="imageWrapper">
        {toggleState.src ? (
          <Image
            height={1200}
            width={1200}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            src={toggleState.src}
            alt="Project"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ImageToggle;
