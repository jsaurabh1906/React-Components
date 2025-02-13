import React, { useState } from "react";
import { tabStyles } from "./tabStyles";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={tabStyles.tabsOuterDiv}>
      <h3 className={tabStyles.tabsHeading}>Basic Dashboard Tabs</h3>
      <p className={tabStyles.tabsInfo}>
        Dashboard Tabs are used to switch between different sections of a page.
      </p>

      {/* Tab Buttons */}
      <div className={tabStyles.tabsButtonsDiv}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`${tabStyles.tabsButton} ${
              activeTab === index ? tabStyles.activeTab : tabStyles.inactiveTab
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={tabStyles.tabsContentDiv}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
