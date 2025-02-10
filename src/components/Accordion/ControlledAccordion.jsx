import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import routerReference from "../../utils/routerReference";

const ControlledAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (infoId) => {
    setActiveIndex((prev) => (prev === infoId ? null : infoId));
  };

  return (
    <div className=" flex flex-col justify-center items-center p-4  m-2 border-2 border-violet-500 rounded-md">
      <h3 className="text-xl font-semibold text-violet-700">
        Controlled Accordion{" "}
        <span className="text-sm"> (with smooth animation)</span>
      </h3>
      <p className="text-sm">
        The state is managed externally by a parent component.{" "}
      </p>
      {routerReference.map((info) => (
        <AccordionItem
          key={info.id}
          isOpen={activeIndex === info.id}
          onClick={() => handleClick(info.id)}
          data={info}
        />
      ))}
    </div>
  );
};

export default ControlledAccordion;
