import { FaCog, FaHome, FaUser } from "react-icons/fa";

export const tabs = [
  {
    id: 1,
    tabId: "home",
    name: "Home",
    icon: () => <FaHome />,
    content: "This is the random home page content",
  },
  {
    id: 2,
    tabId: "profile",
    name: "Profile",
    icon: () => <FaUser />,
    content: "This is the random profile page content",
  },
  {
    id: 3,
    tabId: "settings",
    name: "Settings",
    icon: () => <FaCog />,
    content: "This is the random settings page content",
  },
];

export const controlledTabs = [
  { id: "dashboard", label: "Dashboard", content: "Welcome to the Dashboard!" },
  { id: "reports", label: "Reports", content: "Here are the Reports data." },
];

export const planTabs = [
  {
    id: 1,
    tabId: "basic",
    label: "Basic Plan",
    content: "Limited access, Basic Support",
  },
  {
    id: 2,
    tabId: "pro",
    label: "Pro Plan",
    content: "Advanced features, Priority Support",
  },
  {
    id: 3,
    tabId: "enterprise",
    label: "Enterprise",
    content: "Full Access, Dedicated Manager",
  },
];
