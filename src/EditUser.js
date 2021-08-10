import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function EditUser(props) {
  const [userName, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");

  const userContext = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    let userData = userContext.userList[props.match.params.id - 1];
    setUserName(userData.userName);
    setPosition(userData.position);
    setOffice(userData.office);
    setAge(userData.age);
    setStartDate(userData.startDate);
    setSalary(userData.salary);
  }, []);

  let handleSubmit = (el) => {
    el.preventDefault();
    let userData = { userName, position, office, age, startDate, salary };
    userContext.userList[props.match.params.id - 1] = userData;
    userContext.setUserList([...userContext.userList]);
    history.push("/user");
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit User</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(el) => {
                  setUserName(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                value={position}
                onChange={(el) => {
                  setPosition(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                value={office}
                onChange={(el) => {
                  setOffice(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                value={age}
                onChange={(el) => {
                  setAge(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Start Date</label>
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(el) => {
                  setStartDate(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input
                type="text"
                className="form-control"
                value={salary}
                onChange={(el) => {
                  setSalary(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-12">
              <input
                type="submit"
                value="Update"
                className="btn btn-primary mt-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
