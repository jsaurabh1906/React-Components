import React from "react";
import SimpleAccordion from "./SimpleAccordion";
import MultiAccordion from "./MultiAccordion";
import SingleOpenAccordion from "./SingleOpenAccordion";
import ControlledAccordion from "./ControlledAccordion";

const AccordionApp = () => {
  return (
    <>
      <SimpleAccordion />
      <MultiAccordion />
      <SingleOpenAccordion />
      <ControlledAccordion />
    </>
  );
};

export default AccordionApp;
