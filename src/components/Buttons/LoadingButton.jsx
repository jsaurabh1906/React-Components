import React from "react";
import ButtonLayout from "./ReusableItems/ButtonLayout";

const LoadingButton = ({ label }) => {
  const [loading, setLoading] = React.useState(false);
  const [fetchLoading, setFetchLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate a delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleFetch = () => {
    setFetchLoading(true);
    // Simulate a delay
    setTimeout(() => {
      setFetchLoading(false);
    }, 2000);
  };

  const Loader = () => {
    return (
      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    );
  };
  return (
    <ButtonLayout
      heading="Loading Button"
      info="Used for submitting forms or API requests with a loading state."
    >
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-md flex items-center"
      >
        {loading ? <Loader /> : label}
      </button>
      <button
        onClick={handleFetch}
        className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-md flex items-center"
      >
        {fetchLoading && <Loader />}
        <span className=" mx-2">{fetchLoading ? "Fetching..." : "Fetch"}</span>
      </button>
    </ButtonLayout>
  );
};

export default LoadingButton;
