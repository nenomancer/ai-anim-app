import react, { Fragment } from "react";
import InlineEdit from "./InlineEdit";
import Prompt from "./Prompt";

const PromptColumn = ({ prompts }) => {
//   const deleteClickHandler = (index) => {
//     const removePrompt = props.prompts.filter((prompt) => {
//       return prompt.id !== index;
//     });

//     setPrompts(removePrompt);
//   };
  return (
    <Fragment>
      {/* displaying the prompt column */}
      <div className="prompts-column">
        <div className="prompts-help">
          <span>Prompts</span>
          <span>Frames</span>
        </div>
        <div className="prompts-container">
          {prompts.map((prompt) => (
            <Prompt key={Math.random()} prompt={prompt} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default PromptColumn;
