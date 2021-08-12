import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let user = await axios.get(
          `https://60f460de3cb0870017a8a216.mockapi.io/users`
        );
        setUserList([...user.data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  let handleDelete = async (id) => {
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      try {
        await axios.delete(
          `https://60f460de3cb0870017a8a216.mockapi.io/users/${id}`
        );
        let rowIndex = userList.findIndex((el) => el.id === id);
        userList.splice(rowIndex, 1);
        setUserList([...userList]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">Users</h1>
      <Link to="/user/create" className="btn btn-primary shadow-sm mb-3">
        <i className="fas fa-download fa-sm text-white-50"></i> Create User
      </Link>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">List of Users</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email ID</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map((el) => {
                    return (
                      <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.position}</td>
                        <td>{el.mail}</td>
                        <td>${" "}{el.salary}</td>
                        <td>
                          <Link
                            to={`/user/edit/${el.id}`}
                            className="btn btn-info"
                          >
                            Update
                          </Link>
                          <button
                            className="btn btn-danger ml-3"
                            onClick={() => {
                              handleDelete(el.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
