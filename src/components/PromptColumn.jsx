import react, { Fragment, useState } from "react";
import InlineEdit from "./InlineEdit";
import Prompt from "./Prompt";

const PromptColumn = (props) => {
  const [newPrompt, setNewPrompt] = useState("");

  return (
    <Fragment>
      {/* displaying the prompt column */}
      <div className="prompts-column">
        <div className="prompts-help">
          <span>Prompts</span>
          <span>Frames</span>
        </div>
        <div className="prompts-container">
          {props.prompts.map((prompt, index) => (
            <Prompt
              key={Math.floor(Math.random() * 100000) + 1}
              index={index}
              prompt={prompt}
              prompts={props.prompts}
              setPrompts={props.setPrompts}
              deletePromptHandler={props.deletePromptHandler}
            />
          ))}
          <InlineEdit
            type="text"
            placeholder="Enter a new Prompt"
            className="prompts-new"
            prompts={props.prompts}
            setPrompts={props.setPrompts}
            value={newPrompt}
            setValue={setNewPrompt}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default PromptColumn;
