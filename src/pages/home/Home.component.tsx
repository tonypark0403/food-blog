import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { PreLoading, Logo } from "./Home.style";

const Home: React.FC<any> = props => {
  return (
    <>
      <div>
        <PreLoading>
          <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} size="6x" />
        </PreLoading>
        <Logo>Toronto</Logo>
      </div>
    </>
  );
};

export default Home;
