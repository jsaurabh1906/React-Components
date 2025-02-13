import React from "react";
import DashboardTabs from "./DashboardTabs";
import TabsWithIcons from "./TabsWithIcons";
import ControlledTabParent from "./ControlledTabParent";
import AnimatedTabs from "./AnimatedTabs";

const TabsApp = () => {
  return (
    <>
      {/* Ex1: Basic Tabs with Dashboard Example */}
      <DashboardTabs />
      {/* Ex2: Tabs With Icons  */}
      <TabsWithIcons />
      {/* Ex3: Controlled Tabs : The Active tab state managed by parent component  */}
      <ControlledTabParent />
      {/* Ex: Animated Tabs */}
      <AnimatedTabs />
    </>
  );
};

export default TabsApp;
