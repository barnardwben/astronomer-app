import React, { useEffect, useState, useRef } from "react";
import SecondTabSelector from "./SecondTabSelector";

function DeployScale() {
  const [tabid, setTabId] = useState("0");
  const tabOneRef = useRef(null);
  const tabTwoRef = useRef(null);
  const tabThreeRef = useRef(null);

  const tabSwitch = (e) => {
    let element = e.target;
    if (element.classList.contains("pi-one")) {
      setTabId("0");
      tabOneRef.current.classList.add("active-tab");
      tabTwoRef.current.classList.remove("active-tab");
      tabThreeRef.current.classList.remove("active-tab");
    } else if (element.classList.contains("pi-two")) {
      setTabId("1");
      tabOneRef.current.classList.remove("active-tab");
      tabTwoRef.current.classList.add("active-tab");
      tabThreeRef.current.classList.remove("active-tab");
    } else {
      setTabId("2");
      tabOneRef.current.classList.remove("active-tab");
      tabTwoRef.current.classList.remove("active-tab");
      tabThreeRef.current.classList.add("active-tab");
    }
  };
  return (
    <>
      <div className="develop-locally">
        <p>
          Write, test, and run DAGs in a lightweight local development
          environment.
        </p>
        <div className="purple-info-container">
          <div className="pi-container-btns">
            <button
              className="pi-btn active-tab pi-one"
              ref={tabOneRef}
              onClick={tabSwitch}
            >
              Create
            </button>
            <button
              className="pi-btn pi-two"
              ref={tabTwoRef}
              onClick={tabSwitch}
            >
              Deploy
            </button>
            <button
              className="pi-btn pi-three"
              ref={tabThreeRef}
              onClick={tabSwitch}
            >
              Manage
            </button>
          </div>
          <section className="pi-body">
            <div className="pi-body-content">
              <SecondTabSelector tabid={tabid} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DeployScale;
