"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronRight } from "react-icons/fa";

import "./image-toggle.scss";

const ImageButton = ({ data, toggleState, setOpenImage }: any) => {
  const activeButton = toggleState.id === data.id;

  return (
    <button
      className={`imageButton ${activeButton ? "activeButton" : ""}`}
      onClick={() => {
        return setOpenImage({ id: data.id, src: data.src });
      }}
    >
      {data.title}
      {activeButton ? (
        <FaChevronCircleRight className="buttonIcon" />
      ) : (
        <FaChevronRight className="buttonIcon" />
      )}
    </button>
  );
};

const ImageToggle = ({ images }: any) => {
  const [toggleState, setToggleOpen] = useState({
    id: images[0].id,
    src: images[0].src,
  });

  return (
    <div className="imageToggleWrapper">
      <div className="imageButtonWrapper">
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
