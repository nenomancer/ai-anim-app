import { useState, Fragment } from "react";
import InlineEdit from "./InlineEdit";

const Prompt = (props) => {
  const [value, setValue] = useState(props.prompt);

  return (
    <div className="prompt">
      <button onClick={() => props.deletePromptHandler(props.prompt)}>
        Delete
      </button>
      <InlineEdit value={value} setValue={setValue} type="text" />
    </div>
  );
};

export default Prompt;
