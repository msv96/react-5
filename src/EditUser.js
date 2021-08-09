import React from "react";

function EditUser(props) {
  console.log(props);
  return (
    <div>
      <h1 className="h3 mb-2 text-gray-800">
        User ID : {props.match.params.id}
      </h1>
    </div>
  );
}

export default EditUser;
