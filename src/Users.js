import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
function Users() {
  const userContext = useContext(UserContext);
  let handleDelete = (index) => {
    let confirm = window.confirm("Do you want to delete?");
    if(confirm) {
      userContext.userList.splice(index - 1,1);
      userContext.setUserList([...userContext.userList]);
    }
  }
    return (
      <div>
        <h1 className="h3 mb-2 text-gray-800">Users</h1>
        <Link to="/user/create" className="btn btn-sm btn-primary shadow-sm mb-3">
          <FontAwesomeIcon icon={faDownload} size="sm" className="text-white-50"></FontAwesomeIcon> Create User
        </Link>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {userContext.userList.map((el, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{el.userName}</td>
                      <td>{el.position}</td>
                      <td>{el.office}</td>
                      <td>{el.age}</td>
                      <td>{el.startDate}</td>
                      <td>{el.salary}</td>
                      <td>
                        <Link
                          to={`/user/edit/${index + 1}`}
                          className="btn btn-sm btn-primary ml-3"
                        >
                          Edit
                        </Link>
                        <button className="btn btn-sm btn-danger ml-3" onClick={() => {handleDelete(index + 1)}}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            </div>
        </div>
      </div>
    </div>
  );
}
export default Users;