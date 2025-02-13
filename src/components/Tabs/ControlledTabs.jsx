import React from "react";
import { tabStyles } from "./tabStyles";
import { controlledTabs as tabs } from "../../utils/tabs";

const ControlledTabs = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className={tabStyles.tabsButtonsDiv}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${tabStyles.tabsButton} ${
              activeTab === tab.id ? tabStyles.activeTab : tabStyles.inactiveTab
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={tabStyles.tabsContentDiv}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </>
  );
};

export default ControlledTabs;
