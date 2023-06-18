import React, { useState } from "react";
import { promptGPT } from "../util";
import { createCuratedResumePrompt } from "../Prompt";
import { PromptDisplayer } from "./PromptDisplayer";

const AnswerSection = ({ storedValues }) => {
  const [curatedResume, setCuratedResume] = useState(false);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleClick = async (keywords) => {
    setCuratedResume(await promptGPT(createCuratedResumePrompt(keywords)));
  };

  return (
    <>
      <hr className="hr-line" />
      <div className="answer-container">
        {storedValues.map((value, index) => {
          return (
            <div className="answer-section" key={index}>
              <p>Keywords:</p>
              <p className="answer">{value.answer}</p>
              <div className="copy-icon" onClick={() => copyText(value.answer)}>
                <button onClick={() => handleClick(value.answer)}>
                  Create Curated Resume
                </button>
              </div>
              {curatedResume !== false && (
                <PromptDisplayer>{curatedResume}</PromptDisplayer>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnswerSection;
