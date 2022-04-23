import react from "react";

const InlineEdit = ({ value, setValue, size }) => {
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
      <div className="inline-data">
          <input size={size} type="text" value={value} onChange={onChange} />
      </div>
  )
};

export default InlineEdit;
