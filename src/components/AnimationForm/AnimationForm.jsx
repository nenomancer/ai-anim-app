import react, { useState, Fragment } from "react";

const AnimationForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };
  return (
    <Fragment>
      <div>Animation</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Add prompt:</label>
        <br />
        <input
          type="text"
          value={input}
          id="prompt"
          name="prompt"
          onChange={onChangeHandler}
        />
        <button>Add Prompt</button>
      </form>
    </Fragment>
  );
};

export default AnimationForm;

// 10:(brains and ganglia illustration by m.c. escher:1 | huge library filled with books illustration by m.c. escher: 0), 70:(brains and ganglia illustration by m.c. escher:0 | huge library filled with books illustration by m.c. escher: 1)
