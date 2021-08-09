import React from "react";

function EditProduct(props) {
  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">
        Product ID : {props.match.params.id}
      </h1>
    </div>
  );
}

export default EditProduct;
