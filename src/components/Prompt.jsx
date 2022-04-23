import react, { useState } from "react";
import InlineEdit from "./InlineEdit";

const Prompt = ({ prompt }) => {
  const [value, setValue] = useState(prompt);
  return <InlineEdit value={value} setValue={setValue} />;
};

export default Prompt;
