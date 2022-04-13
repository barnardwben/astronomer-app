import React, { useEffect, useRef } from "react";
import DevelopLocally from "./DevelopLocally";
import DeployScale from "./DeployScale";

function ComponentSelector(props) {
  const isDev = props.compid;

  if (isDev === "0") {
    return <DevelopLocally />;
  } else {
    return <DeployScale />;
  }
}

export default ComponentSelector;
