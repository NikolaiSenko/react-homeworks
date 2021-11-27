import "./Text.css";

const Text = ({ text, size, color, underline }) => {
  return (
    <p
      className="text"
      style={{
        fontSize: size,
        color: color,
        textDecoration:`${underline  ? 'underline' :  'none'}` 
      }}
    >
      {text}
    </p>
  );
};

export default Text;
