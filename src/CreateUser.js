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
      <div className="container">
        <form onSubmit={() => {handleSubmit()}}>
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Username" required />
            </div>
            <div className="col-lg-6">
              <label htmlFor="position">Position</label>
              <input type="text" className="form-control" id="position" placeholder="Position" required />
            </div>
            <div className="col-lg-6">
              <label htmlFor="office">Office</label>
              <input type="text" className="form-control" id="office" placeholder="Office" required />
            </div>
            <div className="col-lg-6">
              <label htmlFor="age">Age</label>
              <input type="text" className="form-control" id="age" placeholder="Age" required />
            </div>
            <div className="col-lg-6">
              <label htmlFor="startdate">Start Date</label>
              <input type="date" className="form-control" id="startdate" required />
            </div>
            <div className="col-lg-6">
              <label htmlFor="salary">Salary</label>
              <input type="text" className="form-control" id="salary" placeholder="Salary" required />
            </div>
            <div className="col-lg-6">
              <input type="submit" value="Submit" className="btn btn-primary" style={{marginTop:"10px"}} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
