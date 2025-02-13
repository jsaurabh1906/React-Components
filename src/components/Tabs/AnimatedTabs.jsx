import React, { useState } from "react";
import { motion } from "framer-motion";
import { planTabs as tabs } from "../../utils/tabs";
import { tabStyles } from "./tabStyles";

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].tabId);

  return (
    <>
      <div className={tabStyles.tabsOuterDiv}>
        <h3 className={tabStyles.tabsHeading}>Animated Tabs</h3>
        <div className={`${tabStyles.tabsButtonsDiv} relative`}>
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTab(tab.tabId)}
              key={tab.id}
              className={`relative px-6 py-3  text-md font-semibold transition-all duration-300  
                ${
                  activeTab === tab.tabId
                    ? "text-fuchsia-600"
                    : "text-gray-500 hover:text-fuchsia-600"
                }`}
            >
              {tab.label}
              {activeTab === tab.tabId && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-1 bg-fuchsia-600 rounded-t-md"
                />
              )}
            </button>
          ))}
        </div>
        <div className={tabStyles.tabsContentDiv}>
          {tabs.find((tab) => tab.tabId === activeTab).content}
        </div>
      </div>
    </>
  );
};

export default AnimatedTabs;
