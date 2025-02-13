import React, { useState } from "react";
import { tabs } from "../../utils/tabs";
import { tabStyles } from "./tabStyles";
const TabsWithIcons = () => {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className={tabStyles.tabsOuterDiv}>
      <h3 className={tabStyles.tabsHeading}>Tabs With Icons</h3>
      <div className={`${tabStyles.tabsButtonsDiv} `}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.tabId)}
            className={`flex justify-center items-center gap-2 ${
              tabStyles.tabsButton
            }  ${
              tab.tabId === activeTab
                ? tabStyles.activeTab
                : tabStyles.inactiveTab
            }`}
          >
            {tab.icon()} {tab.name}
          </button>
        ))}
      </div>
      <div className={tabStyles.tabsContentDiv}>
        {tabs.find((tab) => tab.tabId === activeTab).content}
      </div>
    </div>
  );
};

export default TabsWithIcons;
