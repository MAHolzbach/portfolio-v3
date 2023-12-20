"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronCircleRight, FaChevronRight } from "react-icons/fa";

import "./image-toggle.scss";

const ImageButton = ({ data, toggleState, setOpenImage }: any) => {
  const activeButton = toggleState.id === data.id;

  return (
    <button
      className="imageButton"
      onClick={() => {
        return setOpenImage({
          id: data.id,
          isMobile: data.mobileImage,
          src: data.src,
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

const ImageToggle = ({ images }: any) => {
  console.log("ImageToggle -->", images);
  const [toggleState, setToggleOpen] = useState({
    id: images[0].id,
    isMobile: images[0].mobileImage,
    src: images[0].src,
    blurredDataUrl: images[0].blurredDataUrl,
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

      <div className={toggleState.isMobile ? "mobileImageWrapper" : ""}>
        {toggleState.src ? (
          <Image
            height={1200}
            width={2400}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            src={toggleState.src}
            placeholder="blur"
            blurDataURL={toggleState.blurredDataUrl}
            alt="Project"
          />
        ) : null}
      </div>
    </div>
  );
};

export default ImageToggle;
