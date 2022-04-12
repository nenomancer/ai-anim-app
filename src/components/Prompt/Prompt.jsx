import react, { useState } from "react";
import "./Prompt.css";

const Prompt = ({ keyframes }) => {
  const [promptText, setPromptText] = useState("firstPromptsad");
  const [promptKeys, setPromptKeys] = useState([
    {
      frame: 10,
      text: "0",
    },
    {
      frame: 40,
      text: "1",
    },
  ]);


  return (
    <div className="prompt-container">
      <div className="prompt-text"> {promptText} </div>
      <div className="prompt-keyframes">
        {promptKeys.map((promptKey, index) => (
          <div key={index} className="prompt-key">
            {promptKey.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prompt;
