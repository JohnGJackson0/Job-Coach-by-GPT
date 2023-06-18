import { useState } from "react";
import { JobDescriptionPrompt } from "../Prompt";

const FormSection = ({ generateResponse }) => {
  const [prompt, setPrompt] = useState(JobDescriptionPrompt);
  const [newQuestion, setNewQuestion] = useState("");

  return (
    <div className="form-section">
      <textarea
        rows="5"
        className="form-control"
        placeholder="Input the job description"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      ></textarea>
      <button
        className="btn"
        onClick={() =>
          generateResponse(
            `${prompt} \n Job Description: ${newQuestion}`,
            setNewQuestion
          )
        }
      >
        Generate 🤖
      </button>
    </div>
  );
};

export default FormSection;
