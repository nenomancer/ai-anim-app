import { useState } from "react";
import InlineEdit from "./InlineEdit";

const Keyframe = (props) => {
  const [value, setValue] = useState(props.value)
  return (
    <InlineEdit
      key={props.index}
      type="number"
      name="key"
      size="1"
      maxLength="2"
      value={value}
      setValue={setValue}

    />
  );
};

export default Keyframe;
