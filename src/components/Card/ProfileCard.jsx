import React from "react";
import { userData as user } from "../../utils/cardsData";

const ProfileCard = () => {
  return (
    <div className="bg-blue-100 p-10 md:p-20">
      <h2 className="text-xl font-bold text-blue-800 text-center mb-2">
        Profile Card
      </h2>
      <p className="text-sm text-blue-600 text-center mb-2">
        Displays user details, useful for social media apps or dashboards.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-sm flex flex-col justify-center items-center mt-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full ring-2 ring-blue-300 mb-4 transition-transform hover:scale-105 duration-300"
        />
        <h3 className="text-lg font-bold text-blue-800 mb-2">{user.name}</h3>
        <p className="text-blue-600 text-sm mb-4">{user.role}</p>
        <div className="flex gap-3 mb-4">
          <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600">
            Follow
          </button>
          <button className="bg-white border border-blue-500 text-blue-500 font-semibold px-4 py-2 rounded-md hover:bg-blue-50">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
