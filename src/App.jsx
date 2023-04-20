import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserTable from "./components/UserTable";

function App() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // console.log(res);
      setUserList(res.data);
    });
  };
  return (
    <div className="App">
      <UserTable userList={userList} />
    </div>
  );
}

export default App;
