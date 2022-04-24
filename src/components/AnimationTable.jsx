import react, { useState, useEffect } from "react";
import "./AnimationTable.css";
import KeyframeColumn from "./KeyframeColumn";
import PromptColumn from "./PromptColumn";

const AnimationTable = () => {
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
  }, [keyframes]);

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
  const deletePromptHandler = (selectedPrompt) => {
    // FILTER OUT THE SELECTED PROMPT
    const removePrompt = prompts.filter((prompt) => {
      return selectedPrompt !== prompt;
    });
    // SET FILTERED PROMPTS AS NEW STATE
    setPrompts(removePrompt);
  };

  // ADD KEYFRAME
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
      <PromptColumn
        prompts={prompts}
        setPrompts={setPrompts}
        deletePromptHandler={deletePromptHandler}
      />

      {/* display keyframe columns  */}
      {keyframes.map((keyframe, index) => (
        <KeyframeColumn
          index={index}
          prompts={prompts}
          deleteKeyframeHandler={deleteKeyframeHandler}
          frame={keyframe}
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
