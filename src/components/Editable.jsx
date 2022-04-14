import react, { useState } from "react";

const Editable = ({ text, type, placeholder, children, ...props }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleKeyDown = (event, type) => {
    // somethin
  };

  return (
    <section {...props}>
      {isEditing ? (
        <div
          onBlur={() => setIsEditing(false)}
          onKeyDown={(e) => handleKeyDown(e, type)}
        >
          {children}
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <span>{text || placeholder || "editable content"}</span>
        </div>
      )}
    </section>
  );
};

export default Editable;
