import react, { useEffect, useState } from "react";
import Keyframe from "./Keyframe";

const KeyframeColumn = ({ prompts, index, frame, deleteKeyframeHandler }) => {
  // let keyframes = [];
  // for (const prompt of prompts) {
  //   keyframes.push(prompt.id)
  // }
  // console.log(keyframes);
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem("prompts");
    if (savedValues) {
      return JSON.parse(savedValues);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  return (
    <ul className="keyframe-column">
      <div className="keyframe-help">
        <li>{frame}</li>
        <button onClick={() => deleteKeyframeHandler(index)}>X</button>
      </div>
      {prompts.map((prompt, index) => (
        <Keyframe key={Math.random()} index={index} />
      ))}
    </ul>
  );
};

export default KeyframeColumn;
