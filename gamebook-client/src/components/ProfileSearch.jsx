import React from "react";

export default function ProfileSearch() {
  const searchFunc = async event => {
    //console.log(props);
    event.preventDefault();
    const query = event.target.value;

    /* const result = await axios.get(`http://localhost:3000/profile/${query}`, {
          headers: { Authorization: sessionStorage.getItem("Authorization") }
        }); */

    //props.history.push(`/profile/${query}`);
  };
  return (
    <div>
      <div className="ui search mx-5">
        <div className="ui icon input">
          <input
            onChange={searchFunc}
            className="prompt"
            type="text"
            placeholder="Profile search"
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </div>
    </div>
  );
}
