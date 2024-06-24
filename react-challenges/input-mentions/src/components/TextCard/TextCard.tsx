import "./style.css";
import { FaSave } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { ChangeEvent, useState } from "react";

interface Props {
  users: string[];
}

const TextCard = ({ users }: Props) => {
  const [post, setPost] = useState<string>(localStorage.getItem("post") || "");
  const [mentionedUsers, setMentionedUsers] = useState<string[]>([]);

  const containsUserMention = (text: string) => {
    return text.includes("@");
  };

  const filterUserByMention = (text: string) => {
    const pattern = /@(.+)/;
    const match = text.match(pattern);

    if (match) {
      const userName = match[1].toLowerCase();
      const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(userName),
      );

      setMentionedUsers([...filteredUsers]);
    } else setMentionedUsers([]);
  };

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newPost = event.target.value;

    if (containsUserMention(newPost)) {
      filterUserByMention(newPost);
    }

    setPost(newPost);
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
        {mentionedUsers.length > 0 && (
          <ul className="users-list" role="list">
            {mentionedUsers.map((user) => (
              <li key={user} className="user-item">
                {user}
              </li>
            ))}
          </ul>
        )}
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
