import React, { Component } from "react";

class User extends Component<any, any> {
  render() {
    const data: { [index: string]: any } = {
      email: "tony@tony.com",
      name: "Tony Park",
      picture: "",
      error: ""
    };
    return (
      <div>
        {Object.keys(data).map((key, i) => {
          return (
            <p key={i}>
              {key}: {data[key]}
            </p>
          );
        })}
      </div>
    );
  }
}

export default User;
