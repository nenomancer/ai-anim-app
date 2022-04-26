import react from "react";

const InlineEdit = (props) => {
  const dataType = props.className;
  const onChange = (e) => {
    props.setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      if (dataType === "prompts-new") {
        props.setPrompts([...props.prompts, props.value]);
        e.target.blur();
        props.setValue("");
      }
      if (dataType === "prompts-value") {
        props.setValue(props.value);
        props.prompts[props.index] = e.target.value;
        props.setPrompts([...props.prompts]);
      }
      if (dataType === "keyframe-frame") {
        props.setValue(props.value);
        props.keyframes[props.index] = e.target.value;
        props.setKeyframes([...props.keyframes]);
      }
      if (dataType === "keyframe-value") {
        console.log(props.index);
        props.setValue(props.value);
        props.keyframeValues[props.index] = e.target.value;
        props.setKeyframeValues([...props.keyframeValues]);
      }
    }
  };

  const onClick = (e) => {
    e.target.select();
  };

  return (
    <div className={`inline-data ${props.className}`}>
      <input
        placeholder={props.placeholder}
        size={props.size}
        type={props.type}
        value={props.value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onClick}
      />
    </div>
  );
};

export default InlineEdit;
