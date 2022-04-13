import react, { Fragment, useState, useEffect } from "react";

function App() {
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

  return (
    <div className="container">
      {/* displaying the prompt column */}
      <ul className="prompts-container">
        {prompts.map((prompt) => (
          <li key={prompt.id}>
            {prompt.text}{" "}
            <button onClick={() => editClickHandler(prompt)}>Edit</button>
            <button onClick={() => deleteClickHandler(prompt.id)}>
              Delete
            </button>
          </li>
        ))}
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
      
    
      {/* displaying the first keyframe column */}
      <ul className="keyframe-column">
        {prompts.map((prompt) => (
          <li key={prompt.id}>0</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
