import react, { useState } from "react";
import AnimationForm from "../AnimationForm/AnimationForm";

const AnimationTable = (props) => {
  const [animPrompts, setAnimPrompts] = useState(["gaaaz", "fasdfasfdas"]);

  const addPrompt = (prompt) => {
    //   if(!prompt.text || /^\s*$/.text(prompt.text)) {

    const newPrompts = [...animPrompts, prompt];

    setAnimPrompts(newPrompts);
    console.log(newPrompts);
    //   }
  };
  return (
    <div>
      <AnimationForm onSubmit={addPrompt}/>
      <p>Prompts: </p>
      {animPrompts.map((anim, index) => (
        <p key={index}>{anim}</p>
      ))}
    </div>
  );
};

export default AnimationTable;
