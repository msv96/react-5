import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";

function CreateUser() {
  const [username, setUserName] = useState("");
  const [position, setPosition] = useState("");
  const [office, setOffice] = useState("");
  const [age, setAge] = useState("");
  const [startdate, setStartDate] = useState("");
  const [salary, setSalary] = useState("");
  const userContext = useContext(UserContext);
  const history = useHistory();

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = {username,position,office,age,startdate,salary};
    UserContext.setUserList([...userContext.userList, userData]);
    history.push("/user");
  }
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Create User</h1>
      </div>
      <form onSubmit={() => {handleSubmit()}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <label>Username</label>
              <input type="text" className="form-control" id="username" placeholder="Username" required />
            </div>
            <div className="col-lg-6">
              <label>Position</label>
              <input type="text" className="form-control" id="position" placeholder="Position" required />
            </div>
            <div className="col-lg-6">
              <label>Office</label>
              <input type="text" className="form-control" id="office" placeholder="Office" required />
            </div>
            <div className="col-lg-6">
              <label>Age</label>
              <input type="text" className="form-control" id="age" placeholder="Age" required />
            </div>
            <div className="col-lg-6">
              <label>Start Date</label>
              <input type="date" className="form-control" id="startdate" required />
            </div>
            <div className="col-lg-6">
              <label>Salary</label>
              <input type="text" className="form-control" id="salary" placeholder="Salary" required />
            </div>
            <div className="col-lg-6">
              <input type="submit" value="Submit" className="btn btn-primary mt-3" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
