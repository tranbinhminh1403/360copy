import React from "react";
import { Image } from "antd";

const DisplayImage = ({
  image,
  alt,
  width,
  height,
  pointer,
  onClick,
}: {
  image: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  pointer?: boolean;
  onClick?: () => void;

}) => {
  return (
    <Image
      src={image}
      alt={alt}
      width={width}
      height={height}
      preview={false}
      onClick={onClick}
      style={{ cursor: pointer ? "pointer" : "default", width: 'auto' }}
    />
  );
};

export default DisplayImage;
