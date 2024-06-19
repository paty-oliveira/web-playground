import "./style.css";

const TextCard = () => {
  return (
    <div className="wrapper">
      <p role="title-card" className="title">
        Write your post:
      </p>
      <div className="card">
        <textarea className="texbox" placeholder="Write here something..." />
      </div>
    </div>
  );
};
export default TextCard;
