import React, { useEffect, useRef } from "react";
import WriteDags from "./WriteDags";
import RunAirflow from "./RunAirflow";
import DebugEase from "./DebugEase";

function FirstTabSelector(props) {
  const trueTab = props.tabid;

  if (trueTab === "0") {
    return <WriteDags />;
  } else if (trueTab === "1") {
    return <RunAirflow />;
  } else {
    return <DebugEase />;
  }
}

export default FirstTabSelector;
