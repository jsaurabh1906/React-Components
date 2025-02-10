import React, { useState } from "react";

const SimpleAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex flex-col justify-center items-center p-4  m-2 border-2 border-violet-500 rounded-md">
      <h3 className="text-xl font-semibold text-violet-700">
        Simple Accordion
      </h3>
      <div className="border border-violet-200 rounded-xl p-2 w-4/5 transition-all duration-300 ease-in-out">
        <div className="flex justify-between pl-4">
          <p className="text-md font-semibold text-violet-700">
            What is useState?
          </p>
          <button
            onClick={handleClick}
            className={`border-2 border-violet-500 rounded-full py-.5 px-2 text-sm font-semibold ${
              isOpen ? "" : "bg-violet-500 text-white hover:bg-violet-600 "
            } transition-all duration-300`}
          >
            {isOpen ? "Close" : "Show"}
          </button>
        </div>
        {isOpen && (
          <div className="px-4">
            <p className="text-gray-700 m-2">
              useState is a React hook that allows you to manage state in
              functional components.
            </p>
            <pre className="text-sm text-white bg-black p-2 rounded-md overflow-x-auto max-w-full">
              <code>const [state, setState] = useState(initialState)</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleAccordion;
