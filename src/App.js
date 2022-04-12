import react, { Fragment, useState } from "react";
import Prompt from "./components/Prompt/Prompt";
import Keyframes from "./components/UI/Keyframes";
import Container from "./components/UI/Container";
import "./components/UI/Container.css";

function App() {
  const [keyframes, setKeyframes] = useState(["0", "40"]);
  const [prompts, setPrompts] = useState(["firstPrompt", "secondPrompt"]);
  return (
    <Container>
      <Keyframes keyframes={keyframes} />
      {prompts.map((prompt, index) => (
        <Prompt key={index} text={prompt} keyframes={keyframes} />
      ))}
    </Container>
  );
}

export default App;
