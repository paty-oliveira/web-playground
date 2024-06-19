import "./style.css";
import { FaSave } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";

const TextCard = () => {
  return (
    <div className="wrapper">
      <p role="title-card" className="title">
        Write your post:
      </p>
      <div className="card">
        <textarea className="texbox" placeholder="Write here something..." />
        <div className="wrapper-btn">
          <button name="save" className="btn">
            <FaSave size={30} />
          </button>
          <button name="clean" className="btn">
            <MdOutlineCleaningServices size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TextCard;
