import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

function CreateUser() {
  const [username, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startdate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");
  const userContext = useContext(UserContext);

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = {username,position,office,age,startdate,salary};
    UserContext.setUserList([...userContext.userList, userData]);
  }
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Create User</h1>
    </div>
  );
}

export default CreateUser;
