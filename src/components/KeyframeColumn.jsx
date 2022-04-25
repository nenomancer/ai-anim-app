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
  const [frame, setFrame] = useState(props.keyframe);

  return (
    <div className="keyframe-column">
      {/* SHOW FRAME NUMBER ON TOP */}
      <div className="keyframe-help">
        <button className="btn-delete" onClick={() => props.deleteKeyframeHandler(props.index)}>
          Delete
        </button>
        <InlineEdit
          className="keyframe-frame"
          type="number"
          size="1"
          value={frame}
          setValue={setFrame}
          dataType="keyframe-column"
        />
      </div>
      {/* SHOW KEYFRAME VALUES  */}
      <div className="keyframe-container">
        {keyframeValues.map((value, index) => (
          <Keyframe
            key={Math.random()}
            index={index}
            value={value}
            className="keyframe"
          />
        ))}
      </div>
    </div>
  );
};

export default KeyframeColumn;
