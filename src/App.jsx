import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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
  return <div className="App"></div>;
}

export default App;
