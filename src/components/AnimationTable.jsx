import react, { useState, useEffect } from "react";
import "./AnimationTable.css";
import KeyframeColumn from "./KeyframeColumn";
import PromptColumn from "./PromptColumn";

const AnimationTable = () => {
  // PROMPTS:
  // STATE TO KEEP TRACK OF PROMPTS
  const [prompts, setPrompts] = useState(() => {
    // USE SAVED PROMPTS AS DEFAULT STATE
    const savedPrompts = localStorage.getItem("prompts");
    if (savedPrompts) {
      return JSON.parse(savedPrompts);
    } else {
      return ["prompt1", "prompt2"];
    }
  });

  // SAVE PROMPTS TO LOCAL STORAGE:
  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompts]);

  // DELETE PROMPT
  const deletePromptHandler = (selectedIndex) => {
    // NEW ARRAY FOR FILTERED PROMPTS
    const filteredPrompts = [];
    // ITERATE THROUGH ALL PROMPTS
    for (let i = 0; i < prompts.length; i++) {
      if (i !== selectedIndex) {
        // ADD ALL PROMPTS EXCEPT SELECTED INTO NEW ARRAY
        filteredPrompts.push(prompts[i]);
      }
    }
    // SET FILTERED PROMPTS AS NEW STATE
    console.log(filteredPrompts);
    setPrompts(filteredPrompts);
  };

  // --------------------------------------------------------------------------------

  // KEYFRAMES:
  // STATE TO KEEP TRACK OF KEYFRAMES
  const [keyframes, setKeyframes] = useState(() => {
    const savedKeyframes = localStorage.getItem("keyframes");
    if (savedKeyframes) {
      return JSON.parse(savedKeyframes);
    } else {
      return keyframes;
    }
  });

  // SAVE KEYFRAMES TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("keyframes", JSON.stringify(keyframes));
  }, [keyframes]);

  // ADD KEYFRAME
  const addKeyframeHandler = (e) => {
    // SPREAD PREVIOUS KEYFRAMES, SET NEW ONE AS 0
    const newKeyframe = keyframes[keyframes.length - 1];
    console.log(newKeyframe);
    const newKeyframes = [...keyframes, "1"];
    setKeyframes(newKeyframes);
  };

  // DELETE KEYFRAME
  const deleteKeyframeHandler = (selectedKeyframe) => {
    const newKeyframes = [];
    for (let i = 0; i < keyframes.length; i++) {
      if (i !== selectedKeyframe) {
        newKeyframes.push(keyframes[i]);
      }
    }
    setKeyframes(newKeyframes);
  };

  // STATE NEEDS TO BE LIFTED FROM KEYFRAME AND PROMPT COLUMN
  // INTO ANIMATION TABLE
  // OR CHANGE THE LOCAL STORAGE FROM WITHIN THE COMPONENTS?

  return (
    <div className="container">
      <PromptColumn
        prompts={prompts}
        setPrompts={setPrompts}
        deletePromptHandler={deletePromptHandler}
      />

      {/* display keyframe columns  */}
      {keyframes.map((keyframe, index) => (
        <KeyframeColumn
          key={Math.floor(Math.random() * 10000) + 1}
          index={index}
          prompts={prompts}
          keyframes={keyframes}
          setKeyframes={setKeyframes}
          keyframe={keyframe}
          deleteKeyframeHandler={deleteKeyframeHandler}
          
        />
      ))}
      <button onClick={addKeyframeHandler}>Add Keyframe</button>
      <div className="animation-result">
        <p>
          {keyframes[0]}:({prompts[0]}: 1 | {prompts[1]}: 0 | {prompts[2]}: 0),{" "}
          {keyframes[1]}:({prompts[0]}: 0 | {prompts[1]}: 1 | {prompts[2]}: 0)
        </p>
      </div>
      {/* displaying the first keyframe column */}
    </div>
  );
};

export default AnimationTable;
