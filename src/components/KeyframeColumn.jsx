import { useEffect, useState } from "react";
import InlineEdit from "./InlineEdit";
import Keyframe from "./Keyframe";

const KeyframeColumn = (props) => {
  // INITIALIZING KEYFRAMES ARRAY
  const keyframes = [];
  for (let i = 1; i <= props.prompts.length; i++) {
    keyframes.push("0");
  }

  // USING KEYFRAMES ARRAY AS DEFAULT STATE
  const [keyframeValues, setKeyframeValues] = useState(keyframes);

  // FRAME NUMBER STATE
  const [frame, setFrame] = useState(props.frame);

  return (
    <div className="keyframe-column">
      {/* RENDERING FRAME NUMBER ON TOP */}
      <div className="keyframe-help">
        <InlineEdit
          className="keyframe-frame"
          type="number"
          size="1"
          value={frame}
          setValue={setFrame}
        />
        <button onClick={() => props.deleteKeyframeHandler(props.index)}>
          X
        </button>
      </div>
      <div className="keyframe-container">
        {keyframeValues.map((value, index) => (
          <Keyframe key={Math.random()} index={index} value={value} />
        ))}
      </div>
    </div>
  );
};

export default KeyframeColumn;
