import "./style.css";
import { FaSave } from "react-icons/fa";

const TextCard = () => {
  return (
    <div className="wrapper">
      <p role="title-card" className="title">
        Write your post:
      </p>
      <div className="card">
        <textarea className="texbox" placeholder="Write here something..." />
        <div className="wrapper-btn">
          <button name="save" className="save-btn">
            <FaSave size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TextCard;
