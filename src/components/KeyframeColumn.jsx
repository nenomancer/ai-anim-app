import react, { useState } from "react";
import Editable from "./Editable";

const KeyframeColumn = ({ prompts, index, frame, deleteKeyframeHandler }) => {
  const [keyframe, setKeyframe] = useState([]);

  return (
    <ul className="keyframe-column">
      <button onClick={() => deleteKeyframeHandler(index)}>-</button>
      <li className="keyframe-frame">{frame}</li>
      {prompts.map((prompt) => (
        <Editable
          text="0"
          type="input"
          key={Math.random()}
        >
          <input
            type="text"
            name="key"
            value={keyframe}
            onChange={(e) => setKeyframe(e.target.value)}
          />
        </Editable>
      ))}
    </ul>
  );
};

export default KeyframeColumn;
