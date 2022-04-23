import react, { useState, useEffect } from "react";
import "./AnimationTable.css";
import KeyframeColumn from "./KeyframeColumn";
import PromptColumn from "./PromptColumn";

const AnimationTable = () => {
  const [keyframes, setKeyframes] = useState([
    {
      key: 1,
      frame: 0,
    },
    {
      key: 2,
      frame: 40,
    },
  ]);

  const [prompts, setPrompts] = useState(() => {
  // use saved prompts as the initial state
  const savedPrompts = localStorage.getItem("prompts");
  if (savedPrompts) {
    return JSON.parse(savedPrompts);
  } else {
    return [];
  }
  });

  // save prompts to local storage
  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompts]);

  // const [isEditing, setIsEditing] = useState(false);
  // const [editPrompt, setEditPrompt] = useState({});

  const [prompt, setPrompt] = useState("");

  const addKeyframeHandler = (e) => {
    setKeyframes([
      ...keyframes,
      {
        key: keyframes.length + 1,
        frame: 0,
      },
    ]);
  };

  const deleteKeyframeHandler = (e) => {
    const filteredColumns = keyframes.filter((keyframe) => {
      // console.log(keyframe);
      return keyframe.key !== e + 1;
    });

    setKeyframes(filteredColumns);
  };

  return (
    <div className="container">
      <PromptColumn prompts={prompts} />

      {/* display keyframe columns  */}
      {keyframes.map((keyframe, index) => (
        <KeyframeColumn
          index={index}
          prompts={prompts}
          deleteKeyframeHandler={deleteKeyframeHandler}
          frame={keyframe.frame}
          key={keyframe.key}
        />
      ))}
      <button onClick={addKeyframeHandler}>Add Keyframe</button>
      {/* <div className="animation-result">
        <p>
          {keyframes[0].frame}:({prompts[0].text}: 1 | {prompts[1].text}: 0 |{" "}
          {prompts[2].text}: 0), {keyframes[1].frame}:({prompts[0].text}: 0 |{" "}
          {prompts[1].text}: 1 | {prompts[2].text}: 0)
        </p>
      </div> */}
      {/* displaying the first keyframe column */}
    </div>
  );
};

export default AnimationTable;
