import React from "react";
import WithFetch from "./HOC/WithFetch";
const GetUsers = ({ data }) => {
  return (
    <React.Fragment>
      {data.length > 0 &&
        data.map((user) => <h1 key={user.id}> Name: {user.name}</h1>)}
    </React.Fragment>
  );
};

export default WithFetch(GetUsers);
