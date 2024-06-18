import "./style.css";

const TextCard = () => {
  return (
    <>
      <label role="title-card">Write your post:</label>
      <div role="text-card" className="text-card">
        <textarea />
      </div>
    </>
  );
};
export default TextCard;
