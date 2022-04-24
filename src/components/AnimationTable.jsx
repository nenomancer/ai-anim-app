import react, { useState, useEffect } from "react";
import "./AnimationTable.css";
import KeyframeColumn from "./KeyframeColumn";
import PromptColumn from "./PromptColumn";

const AnimationTable = () => {
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
    // FILTER OUT THE SELECTED PROMPT
    console.log(selectedIndex);
    console.log(prompts[selectedIndex]);
    const filteredPrompts = [];
    for (let i = 0; i < prompts.length; i++) {
      if (i !== selectedIndex) {
        filteredPrompts.push(prompts[i]);
      }
    }
    // SET FILTERED PROMPTS AS NEW STATE
    console.log(filteredPrompts);
    setPrompts(filteredPrompts);
  };

  // STATE TO KEEP TRACK OF KEYFRAMES
  const [keyframes, setKeyframes] = useState(() => {
    const savedKeyframes = localStorage.getItem("keyframes");
    if (savedKeyframes) {
      return JSON.parse(savedKeyframes);
    } else {
      return ["0", "50", "100", "150"];
    }
  });

  // SAVE KEYFRAMES TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("keyframes", JSON.stringify(keyframes));
    // console.log("Keyframe has been changed");
  }, [keyframes]);

  // ADD KEYFRAME
  const addKeyframeHandler = (e) => {
    // SPREAD PREVIOUS KEYFRAMES, SET NEW ONE AS 0
    const newKeyframe = keyframes[keyframes.length - 1];
    console.log(newKeyframe);
    const newKeyframes = [...keyframes, "0"];
    setKeyframes(newKeyframes);
  };

  // DELETE KEYFRAME
  const deleteKeyframeHandler = (selectedKeyframe) => {
    const filteredColumns = keyframes.filter((keyframe) => {
      return selectedKeyframe !== keyframe;
    });
    // setKeyframes(filteredColumns);
    console.log(
      `filteredColumns: ${filteredColumns}, selectedKeyframe: ${selectedKeyframe}`
    );
  };

  return (
    <div className="container">
      <PromptColumn
        prompts={prompts}
        setPrompts={setPrompts}
        deletePromptHandler={deletePromptHandler}
      />

      {/* display keyframe columns  */}
      {keyframes.map((keyframe) => (
        <KeyframeColumn
          prompts={prompts}
          deleteKeyframeHandler={deleteKeyframeHandler}
          keyframe={keyframe}
          key={Math.floor(Math.random() * 10000) + 1}
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
