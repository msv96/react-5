import React from "react";
import { Link } from "react-router-dom";

function Product() {
  let productdata = [
    {
      id: "1",
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      startDate: "2011/04/25",
      salary: "$320,800",
    },
    {
      id: "2",
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      startDate: "2011/04/25",
      salary: "$320,800",
    },
  ];
  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">Products</h1>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the
        <a target="_blank" href="https://datatables.net" rel="noreferrer"> official DataTables documentation</a>
        .
      </p>
      <Link
        to="/product/create"
        className="btn btn-sm btn-primary shadow-sm"
        style={{ marginBottom: "15px" }}
      >
        <i className="fas fa-download fa-sm text-white-50"></i> Create Product
      </Link>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Products</h6>
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
                {productdata.map((el) => {
                  return (
                    <tr>
                      <td>{el.id}</td>
                      <td>{el.name}</td>
                      <td>{el.position}</td>
                      <td>{el.office}</td>
                      <td>{el.age}</td>
                      <td>{el.startDate}</td>
                      <td>{el.salary}</td>
                      <td>
                        <Link
                          to={`/product/edit/${el.id}`}
                          className="btn btn-sm btn-primary"
                          style={{ marginLeft: "10px" }}
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          style={{ marginLeft: "10px" }}
                        >
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

export default Product;
