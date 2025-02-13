import React from "react";
import Tabs from "./Tabs";

const DashboardTabs = () => {
  const dashboardTabs = [
    { label: "Overview", content: <p>Dashboard Overview Content</p> },
    { label: "Reports", content: <p>Reports & Analytics Section</p> },
    { label: "Settings", content: <p>Account & Security Settings</p> },
  ];

  return <Tabs tabs={dashboardTabs} />;
};

export default DashboardTabs;
