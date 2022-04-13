import react, { useState } from "react";

const KeyframeColumn = ({ prompts, frame }) => {
  const [keyframes, setKeyframes] = useState(() => {});

  const deleteAnimationColumnHandler = (e) => {
    console.log(e.target);
    // const filteredColumn = keyframes.filter((keyframe) => {
    //   return keyframe.key !== index;
    // });

    // setKeyframes(filteredColumn);
  };

  return (
    <ul className="keyframe-column">
      <button onClick={deleteAnimationColumnHandler}>-</button>
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
