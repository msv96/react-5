import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductContext from "./ProductContext";

function EditProduct(props) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const productContext = useContext(ProductContext);
  const history = useHistory();

  useEffect(() => {
    let productData = productContext.productList[props.match.params.id - 1];
    setProductName(productData.productName);
    setPrice(productData.price);
  }, [props.match.params.id, productContext]);

  let handleSubmit = (el) => {
    el.preventDefault();
    let productData = { productName, price };
    productContext.productList[props.match.params.id - 1] = productData;
    productContext.setProductList([...productContext.productList]);
    history.push("/product");
  };

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit Product</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
            <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                value={productName}
                onChange={(el) => {
                  setProductName(el.target.value);
                }}
                required
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(el) => {
                  setPrice(el.target.value);
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
export default EditProduct;
