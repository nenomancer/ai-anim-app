import react, { useState, useEffect } from "react";

const Keyframe = ({ index }) => {
  // const [values, setValues] = useState([]);
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(JSON.stringify(index));
    if (savedValue) {
      return savedValue;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    localStorage.setItem(JSON.stringify(index), value);
  }, [value]);

  const [editingValue, setEditingValue] = useState(value);

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  };
  return (
    <input
      key={index}
      className="keyframe-row"
      type="number"
      name="key"
      size="1"
      maxLength="2"
      value={editingValue}
      onChange={(e) => setEditingValue(e.target.value)}
      onKeyDown={onKeyDown}
      onBlur={(e) => setValue(e.target.value)}
      onClick={(e) => console.log(index)}
    />
  );
};

export default Keyframe;
