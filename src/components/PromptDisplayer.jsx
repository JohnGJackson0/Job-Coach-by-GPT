import React from "react";

export const PromptDisplayer = ({ children }) => {
  const formattedText = children.split("\n").map((item, key) => {
    return (
      <span key={key}>
        {item}
        <br />
      </span>
    );
  });

  return <div>{formattedText}</div>;
};
