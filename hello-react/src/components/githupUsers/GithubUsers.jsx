/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState, useEffect, useDeferredValue } from "react";

const GithubUsers = () => {
  const [username, setUserName] = useState("");
  const [data, setData] = useState({});
  const userName = useDeferredValue(username);

  useEffect(() => {
    if (userName != "") {
      const fetchData = async () => {
        const response = await axios.get(
          `https://api.github.com/users/${userName}`
        );
        setData(response.data);
      };

      fetchData();
    }
    console.log(data);
  }, [userName]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <React.Fragment>
      <input type="text" onChange={handleChange} />
      <div>
        <h2>{data.login}</h2>
        {data.avatar_url && <img src={data.avatar_url} alt="User Avatar" />}
        {data.public_repos && <p>Public Repos: {data.public_repos}</p>}
        {data.followers && <p>Followers: {data.followers}</p>}
        {data.following && <p>Following: {data.following}</p>}
      </div>
    </React.Fragment>
  );
};

export default GithubUsers;
