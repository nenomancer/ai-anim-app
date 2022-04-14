import react, { useState } from "react";

const KeyframeColumn = ({ prompts, index, frame, deleteKeyframeHandler }) => {
  return (
    <ul className="keyframe-column">
      <button onClick={() => deleteKeyframeHandler(index)}>-</button>
      <li className="keyframe-frame">{frame}</li>
      {prompts.map((prompt) => (
        <li className="keyframe-value" key={prompt.id}>
          0
        </li>
      ))}
    </ul>
  );
};

export default KeyframeColumn;
