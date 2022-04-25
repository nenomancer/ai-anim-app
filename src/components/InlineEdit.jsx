import react from "react";

const InlineEdit = (props) => {
  const dataType = props.dataType;
  const onChange = (e) => {
    props.setValue(e.target.value);
  };

  const onKeyDown = (e) => {
    console.log(e.target.value);
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
    }
    // if (dataType === "newPrompt") {
    //   if (e.key === "Enter") {
    //     props.setPrompts([...props.prompts, props.value]);
    //     e.target.blur();
    //     props.setValue("");
    //   }
    // } else {
    //   if (e.key === "Enter" || e.key === "Escape") {
    //     e.target.blur();
    //     props.setValue(props.value)
    //   } else {
    //       props.setValue(e.target.value);
    //   }
    // }
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
      />
    </div>
  );
};

export default InlineEdit;
