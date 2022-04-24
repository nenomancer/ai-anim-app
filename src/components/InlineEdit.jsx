import react from "react";

const InlineEdit = (props) => {
  const onChange = (e) => {
    props.setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    if (props.tag === "newPrompt") {
      if (e.key === "Enter") {
        props.setPrompts([...props.prompts, props.value]);
        e.target.blur();
        props.setValue("");
      }
    } else {
      if (e.key === "Enter" || e.key === "Escape") {
        e.target.blur();
        props.setValue(props.value)
      } else {
          props.setValue(e.target.value);
      }
    }
  };

  return (
    <div className="inline-data">
      <input
        placeholder={props.placeholder}
        size={props.size}
        type={props.type}
        value={props.value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default InlineEdit;
