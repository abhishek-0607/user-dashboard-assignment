import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UserTable from "./components/UserTable";
import Form from "./components/Form";
import Searchbar from "./components/Searchbar";

function App() {
  const [userList, setUserList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // console.log(res);
      setUserList(res.data);
      setFilterList(res.data);
    });
  };
  return (
    <div className="App">
      <Searchbar setFilterList={setFilterList} userList={userList} />
      <div className="container">
        <Form
          userList={userList}
          setFilterList={setFilterList}
          setUserList={setUserList}
        />
        <UserTable filterList={filterList} />
      </div>
    </div>
  );
}

export default App;
