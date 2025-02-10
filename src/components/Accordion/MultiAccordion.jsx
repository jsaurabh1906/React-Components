import React, { useState } from "react";
import hooksReference from "../../utils/hooksReference";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const MultiAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (id) => {
    // If the id is in the openIndexes array, remove it from the array
    if (openIndexes.includes(id)) {
      setOpenIndexes(openIndexes.filter((index) => index !== id));
      // Otherwise, add it to the array
    } else {
      setOpenIndexes([...openIndexes, id]);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center p-4  m-2 border-2 border-violet-500 rounded-md">
      <h3 className="text-xl font-semibold text-violet-700">
        {" "}
        Multi-Item Accordion{" "}
        <span className="text-sm"> (Expand Multiple Items)</span>
      </h3>
      <p className="text-sm">
        Allows multiple sections to expand at the same time
      </p>

      {hooksReference.slice(1, 4).map((hook) => (
        <div
          key={hook.id}
          className="border border-violet-200 rounded-xl p-2 my-1 w-4/5"
        >
          <div className="flex justify-between items-center pl-4">
            <p className="text-md font-semibold text-violet-700">
              What is {hook.title} ?
            </p>
            <button
              onClick={() => toggleItem(hook.id)}
              className="text-violet-500 hover:text-violet-600 transition-all duration-300"
            >
              {openIndexes.includes(hook.id) ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </div>
          {openIndexes.includes(hook.id) && (
            <div className="px-4">
              <p className="text-gray-700 m-2">{hook.description}</p>
              <pre className="text-sm text-white bg-black p-2 rounded-md overflow-x-auto max-w-full">
                <code>{hook.syntax}</code>
              </pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MultiAccordion;
