import { useState } from "react";
import InlineEdit from "./InlineEdit";

const Keyframe = (props) => {
  const [value, setValue] = useState(props.value);
  return (
    <InlineEdit
      index={props.index}
      type="number"
      name="key"
      size="1"
      maxLength="2"
      keyframeValues={props.keyframeValues}
      setKeyframeValues={props.setKeyframeValues}
      value={value}
      setValue={setValue}
      className="keyframe-value"
    />
  );
};

export default Keyframe;
