import React from "react";
import { FaAngleDown } from "react-icons/fa";

const AccordionItem = ({ isOpen, onClick, data }) => {
  return (
    <div className="border border-violet-200 rounded-xl p-2 my-1 w-4/5 transition-all duration-300">
      <div className="flex justify-between items-center pl-4">
        <p className="text-md font-semibold text-violet-700">{data.title}</p>
        <button
          onClick={onClick}
          className={`text-violet-500 hover:text-violet-600 transition-transform transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <FaAngleDown />
        </button>
      </div>

      {/* Always keep content in the DOM for smooth animation */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 m-2 text-sm md:text-md">
          {data.description}
        </p>
        <pre className="text-sm text-white bg-black p-2 rounded-md overflow-x-auto max-w-full">
          <code>{data.syntax}</code>
        </pre>
      </div>
    </div>
  );
};

export default AccordionItem;

// {isOpen && (
//     <div
//       className={`transition-all duration-500 ease-in-out overflow-hidden ${
//         isOpen ? "max-h-96 opacity-100 p-3" : "max-h-0 opacity-0"
//       }`}
//     >
//       {" "}
//       <p className="text-gray-700 m-2 text-sm md:text-md">
//         {data.description}
//       </p>
//       <pre className="text-sm text-white bg-black p-2 rounded-md overflow-x-auto max-w-full">
//         <code>{data.syntax}</code>
//       </pre>
//     </div>
//   )}

// This means when isOpen is false, the <div> doesn't exist in the DOM at all.
// When isOpen becomes true, React adds the div back, which causes a sudden reflow instead of a smooth transition.
// Why This is a Problem:

// Since the content is removed completely, the browser cannot animate its height and opacity gradually.
// Instead, when isOpen switches to true, it suddenly appears instead of transitioning smoothly.
