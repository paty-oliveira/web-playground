import "./style.css";
import { FaSave } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { ChangeEvent, useState } from "react";

const TextCard = () => {
  const [post, setPost] = useState<string>(localStorage.getItem("post") || "");

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPost(event.target.value);
  };

  const handleOnClickSave = () => {
    localStorage.setItem("post", JSON.stringify(post));
  };

  const handleOnClickDelete = () => {
    localStorage.removeItem("post");
    setPost("");
  };

  return (
    <div className="wrapper">
      <p role="title-card" className="title">
        Write your post:
      </p>
      <div className="card">
        <textarea
          className="texbox"
          placeholder="Write here something..."
          value={post}
          onChange={handleOnChange}
        />
        <div className="wrapper-btn">
          <button name="save" className="btn" onClick={handleOnClickSave}>
            <FaSave size={30} />
          </button>
          <button name="clean" className="btn" onClick={handleOnClickDelete}>
            <MdOutlineCleaningServices size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TextCard;
