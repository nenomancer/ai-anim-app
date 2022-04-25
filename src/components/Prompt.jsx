import { useState, Fragment } from "react";
import InlineEdit from "./InlineEdit";

const Prompt = (props) => {
  const [value, setValue] = useState(props.prompt);

  return (
    <div className="prompt">
      <button
        className="btn-delete"
        onClick={() => props.deletePromptHandler(props.index)}
      >
        Delete
      </button>
      <InlineEdit
        value={value}
        setValue={setValue}
        index={props.index}
        prompts={props.prompts}
        setPrompts={props.setPrompts}
        type="text"
        dataType="prompts-value"
      />
    </div>
  );
};

export default Prompt;
