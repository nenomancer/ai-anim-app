import { useEffect, useState } from "react";
import InlineEdit from "./InlineEdit";
import Keyframe from "./Keyframe";

const KeyframeColumn = (props) => {
  // class Keyframe {
  //   constructor(key, frames) {
  //     this.key = key,
  //     this.frames = [frames]
  //   }
  // }

  
  // KEYFRAME VALUES:
  const defaultArray = [];
  for (var i = 0; i < props.prompts.length; i++) {
    defaultArray.push(i);
  }

  const keyFrames = [props.keyframes[props.index], ...defaultArray];
  console.log(`frame: ${keyFrames[0]} key: ${keyFrames.splice(1)}`);

  // LOAD KEYFRAME VALUES FROM LOCAL STORAGE
  const [keyframeValues, setKeyframeValues] = useState(() => {
    const savedKeyframeValues = localStorage.getItem("keyframeValues");
    if (savedKeyframeValues) {
      return JSON.parse(savedKeyframeValues);
    } else {
      return defaultArray;
    }
  });

  // SAVE KEYFRAME VALUES TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("keyframeValues", JSON.stringify(keyframeValues));
  }, [keyframeValues]);

  // -------------------------------------------------------------------------------

  // FRAME NUMBER STATE
  const [value, setValue] = useState(props.keyframe);

  return (
    <div className="keyframe-column">
      {/* SHOW FRAME NUMBER ON TOP */}
      <div className="keyframe-help">
        <button
          className="btn-delete"
          onClick={() => props.deleteKeyframeHandler(props.index)}
        >
          Delete
        </button>
        <InlineEdit
          keyframes={props.keyframes}
          setKeyframes={props.setKeyframes}
          index={props.index}
          className="keyframe-frame"
          type="number"
          size="1"
          value={value}
          setValue={setValue}
        />
      </div>
      {/* SHOW KEYFRAME VALUES  */}
      <div className="keyframe-container">
        {keyframeValues.map((value, index) => (
          <Keyframe
            key={Math.random()}
            index={index}
            value={value}
            keyframeValues={keyframeValues}
            setKeyframeValues={setKeyframeValues}
            className="keyframe"
          />
        ))}
      </div>
    </div>
  );
};

export default KeyframeColumn;
