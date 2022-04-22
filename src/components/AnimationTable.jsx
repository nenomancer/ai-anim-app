import react, { useState, useEffect } from "react";
import "./AnimationTable.css";
import KeyframeColumn from "./KeyframeColumn";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editPrompt, setEditPrompt] = useState({});
  const [prompt, setPrompt] = useState("");

  // save prompts to local storage
  useEffect(() => {
    localStorage.setItem("prompts", JSON.stringify(prompts));
  }, [prompts]);

  const inputChangeHandler = (e) => {
    setPrompt(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (prompt !== "") {
      setPrompts([
        ...prompts,
        {
          id: prompts.length + 1,
          text: prompt.trim(),
        },
      ]);
    }

    setPrompt("");
  };

  const deleteClickHandler = (index) => {
    const removePrompt = prompts.filter((prompt) => {
      return prompt.id !== index;
    });

    setPrompts(removePrompt);
  };

  const editClickHandler = (prompt) => {
    setIsEditing(true);
    console.log(prompt);
    setEditPrompt({ ...prompt });
  };

  const editPromptInputChangeHandler = (e) => {
    setEditPrompt({ ...editPrompt, text: e.target.value });
    console.log(e.target.value);
  };

  const updatePromptHandler = (id, updatedPrompt) => {
    const updatedItem = prompts.map((prompt) => {
      return prompt.id === id ? updatedPrompt : prompt;
    });

    setIsEditing(false);

    setPrompts(updatedItem);
  };

  const editPromptSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    updatePromptHandler(editPrompt.id, editPrompt);
  };

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
      {/* displaying the prompt column */}
      <ul className="prompts-column">
        <div className="prompts-help">
          <span>Prompts</span>
          <span>Frames</span>
        </div>
        <div className="prompts-container">
          {prompts.map((prompt) => (
            <li className="prompts-row" key={prompt.id}>
              <button
                className="prompts-btn"
                onClick={() => deleteClickHandler(prompt.id)}
              >
                X
              </button>
              {prompt.text}
              <div>
                {/* <button
                  className="prompts-btn"
                  onClick={() => editClickHandler(prompt)}
                >
                  Edit
                </button> */}
              </div>
            </li>
          ))}
        </div>
        {isEditing ? (
          <form onSubmit={editPromptSubmitHandler}>
            <h2>Edit Prompt</h2>
            <label htmlFor="editPrompt">Edit prompt: </label>
            <input
              name="editPrompt"
              type="text"
              placeholder="Edit prompt"
              value={editPrompt.text}
              onChange={editPromptInputChangeHandler}
            ></input>
          </form>
        ) : (
          <form onSubmit={formSubmitHandler}>
            <input
              name="prompt"
              type="text"
              placeholder="Create a new prompt"
              value={prompt}
              onChange={inputChangeHandler}
            />
          </form>
        )}
      </ul>
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
