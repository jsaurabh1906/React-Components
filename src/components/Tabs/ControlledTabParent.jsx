import React, { useState } from "react";
import ControlledTabs from "./ControlledTabs";
import { tabStyles } from "./tabStyles";

const ControlledTabParent = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className={tabStyles.tabsOuterDiv}>
      <h3 className={tabStyles.tabsHeading}>Controlled Tabs</h3>
      <p className={tabStyles.tabsInfo}>
        The tab state is managed by parent components, which controls the active
        tab
      </p>

      <button
        onClick={() => setActiveTab("reports")}
        className="my-4 px-4 py-2  bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold rounded-md shadow-md transition-colors duration-300"
      >
        Go to Reports
      </button>
      <ControlledTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default ControlledTabParent;
