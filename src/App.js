import { useState } from "react";
import AnimationTable from "./components/AnimationTable";
import InlineEdit from "./components/InlineEdit";

function App() {
  // const [keyframes, setKeyframes] = useState([0, 50, 100]);
  // const [prompts, setPrompts] = useState(["prompt1", "prompt2"]);
  // const [weights, setWeights] = useState([1, 2]);
  
  // class Prompt {
  //   constructor(text, [values]) {
  //     this.text = text;
  //     this.values = [values];
  //   }
  // };
  

  // console.log(prompt);

  // const randomKey = () => Math.floor(Math.random() * 10000 + 1);

  return (
    <AnimationTable />
    // <table>
    //   <tbody>
    //     <tr>
    //       <td></td>
    //       {keyframes.map((keyframe) => (
    //         <td key={randomKey()}>{keyframe}</td>
    //       ))}
    //     </tr>
    //     {prompts.map((prompt) => (
    //       <tr key={randomKey()}>
    //         <td>{prompt}</td>
    //         {keyframes.map((keyframe, index) => (
    //           <td key={randomKey()}>{weights[index]}</td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
}

export default App;
