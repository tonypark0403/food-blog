import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import "./Home.style.scss";

const Home: React.FC<any> = props => {
  return (
    <>
      <div>
        <div className="pre-loading">
          <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} size="6x" />
        </div>
        <p className="logo">Toronto</p>
      </div>
    </>
  );
};

export default Home;
