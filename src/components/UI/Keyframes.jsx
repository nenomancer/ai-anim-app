import react from "react";

const Keyframes = ({ keyframes }) => {
  return (
    <div className="keyframes">
      {keyframes.map((keyframe, index) => (
        <div key={index}>{keyframe}</div>
      ))}
      <div>+</div>
    </div>
  );
};

export default Keyframes;
