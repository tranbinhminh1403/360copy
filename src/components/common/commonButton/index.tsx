import { Button } from "antd";
import React from "react";

const CommonButton = ({
  content,
  onClick,
  width,
}: {
  content: string;
  onClick?: () => void;
  width?: string;
}) => {
  return (
    <Button
      onClick={onClick}
      className=" rounded-md text-base"
      style={{
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "21px",
        padding: "25px 30px",
        borderRadius: "4px",
        backgroundColor: "#DC1F27",
        color: "#fff",
        width: width,
      }}
    >
      {content}
    </Button>
  );
};

export default CommonButton;
