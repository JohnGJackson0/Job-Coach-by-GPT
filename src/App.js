import { Configuration, OpenAIApi } from "openai";

import FormSection from "./components/FormSection";
import AnswerSection from "./components/AnswerSection";

import { useState } from "react";

const App = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: newQuestion,
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response.data.choices) {
      setStoredValues([
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
      setNewQuestion("");
    }
  };

  return (
    <div>
      <div className="header-section">
        <h1>ChatGPT Job Coach 🤖</h1>
      </div>

      <FormSection generateResponse={generateResponse} />

      {storedValues.length > 0 && <AnswerSection storedValues={storedValues} />}
    </div>
  );
};

export default App;
