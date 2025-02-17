import { RouterProvider } from "react-router-dom";
import "./App.css";
import AccordionApp from "./components/Accordion/AccordionApp";
import ButtonsApp from "./components/Buttons/ButtonsApp";
import CardsApp from "./components/Card/CardsApp";
import ModalApp from "./components/Modal/ModalApp";
import MainNavbar from "./components/Navbar/MainNavbar";
import TabsApp from "./components/Tabs/TabsApp";
import router from "./Routes/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
{
  /* <MainNavbar /> */
}

{
  /* ========================== Accordion ==========================*/
}
{
  /* <AccordionApp /> */
}
{
  /* ========================== Modal ==========================*/
}
{
  /* <ModalApp /> */
}
{
  /* ========================== Tabs ==========================*/
}
{
  /* <TabsApp /> */
}
{
  /* ========================== Cards ==========================*/
}
{
  /* <CardsApp /> */
}
{
  /* ========================== Buttons ==========================*/
}
{
  /* <ButtonsApp /> */
}
