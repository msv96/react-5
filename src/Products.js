import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./ProductContext";
function Products() {
  const productContext = useContext(ProductContext);
  let handleDelete = (index) => {
    let confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      productContext.productList.splice(index - 1, 1);
      productContext.setProductList([...productContext.productList]);
    }
  };
  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">Products</h1>
      <Link
        to="/product/create"
        className="btn btn-sm btn-primary shadow-sm mb-3"
      >
        <FontAwesomeIcon icon={faDownload} size="sm" className="text-white-50"></FontAwesomeIcon> Create
        Product
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
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productContext.productList.map((el, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{el.productName}</td>
                      <td>$ {el.price}</td>
                      <td>
                        <Link
                          to={`/product/edit/${index + 1}`}
                          className="btn btn-sm btn-primary ml-3"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-sm btn-danger ml-3"
                          onClick={() => {
                            handleDelete(index + 1);
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
