"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronRight } from "react-icons/fa";
import { TImageData, TImageToggleProps } from "../types";

import "./image-toggle.scss";

const ImageButton = ({ data, toggleState, setOpenImage }: any) => {
  const activeButton = toggleState.id === data.id;

  return (
    <button
      className="imageButton"
      onClick={() => {
        return setOpenImage({
          id: data.id,
          imgSrc: data.imgSrc,
          blurredDataUrl: data.blurredDataUrl,
        });
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

const ImageToggle = ({ images }: TImageToggleProps) => {
  const [toggleState, setToggleOpen] = useState({
    id: null,
    imgSrc: "",
    blurredDataUrl: "",
  });

  const composeImageToggleClasses = (image: TImageData) => {
    return `imageWrapper ${
      image.mobileImage ? "mobileImageWrapper" : "desktopImageWrapper"
    } 
    ${toggleState.id === image.id ? "imageVisible" : "imageHidden"}`;
  };

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
      {images.map((image: TImageData) => (
        <div key={image.id} className={composeImageToggleClasses(image)}>
          <Image
            height={2000}
            width={2000}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            src={image.imgSrc}
            priority
            placeholder="blur"
            blurDataURL={image.blurredDataUrl}
            alt="Project"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageToggle;
