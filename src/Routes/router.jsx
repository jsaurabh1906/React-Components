import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/Home";
import ComponentsHome from "../pages/ComponentsHome";
import AccordionApp from "../components/Accordion/AccordionApp";
import ButtonsApp from "../components/Buttons/ButtonsApp";
import CardsApp from "../components/Card/CardsApp";
import TabsApp from "../components/Tabs/TabsApp";
import ModalApp from "../components/Modal/ModalApp";
import BackgroundApp from "../components/Backgrounds/BackgroundApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <h1>About</h1> },

      // Show ComponentsHome only for /components
      { path: "components", element: <ComponentsHome /> },

      // Nested component routes but NOT inside ComponentsHome
      { path: "components/accordion", element: <AccordionApp /> },
      { path: "components/buttons", element: <ButtonsApp /> },
      { path: "components/cards", element: <CardsApp /> },
      { path: "components/forms", element: <h1>Work in Progress</h1> },
      { path: "components/modals", element: <ModalApp /> },
      { path: "components/tabs", element: <TabsApp /> },
      { path: "components/backgrounds", element: <BackgroundApp /> },
      { path: "*", element: <h1>404 Page Not Found</h1> },
    ],
  },
]);

export default router;
