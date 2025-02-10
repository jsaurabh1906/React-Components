import { useState } from "react";
import hooksReference from "../../utils/hooksReference";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const SingleOpenAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  //   const toggleItem = (hookId) => {
  //     console.log(hookId);
  //     if (openIndex === hookId) {
  //       setOpenIndex(null);
  //     } else {
  //       setOpenIndex(hookId);
  //     }
  //   };

  // This function toggles the open state of an item based on its hookId
  const toggleItem = (hookId) => {
    // Set the openIndex state to the hookId if it is not equal to the current openIndex,
    // otherwise set it to null
    setOpenIndex((prev) => (prev === hookId ? null : hookId));
  };

  return (
    <div className=" flex flex-col justify-center items-center p-4 m-2  border-2 border-violet-500 rounded-md">
      <h3 className="text-xl font-semibold text-violet-700">
        Multi-Item Accordion
        <span className="text-sm"> (Expand Single Item)</span>
      </h3>
      <p className="text-sm"></p>{" "}
      {hooksReference.slice(4, 7).map((hook) => (
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
              {openIndex === hook.id ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </div>
          {openIndex === hook.id && (
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

export default SingleOpenAccordion;
