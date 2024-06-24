import "./App.css";
import TextCard from "./components/TextCard/TextCard.tsx";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const users = ["Paty", "Ana", "Titi"];
    setUsers([...users]);
  }, []);

  return (
    <div className="layout">
      <TextCard users={users} />
    </div>
  );
};

export default App;
