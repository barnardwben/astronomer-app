import React, { useEffect, useRef } from "react";
import Create from "./Create";
import Deploy from "./Deploy";
import Manage from "./Manage";

function SecondTabSelector(props) {
  const trueTab = props.tabid;

  if (trueTab === "0") {
    return <Create />;
  } else if (trueTab === "1") {
    return <Deploy />;
  } else {
    return <Manage />;
  }
}

export default SecondTabSelector;
