import React from "react";
import ButtonLayout from "./ReusableItems/ButtonLayout";
import IconButton from "./ReusableItems/IconButton";
import { FaEdit, FaHeart, FaTrash } from "react-icons/fa";

const IconType = () => {
  return (
    <ButtonLayout
      heading="Icon Buttons"
      info="Quick actions like deleting, editing, or favoriting an item."
    >
      <IconButton
        icon={<FaEdit size={20} className="text-blue-500" />}
        onClick={() => {}}
      />
      <IconButton
        icon={<FaTrash className="text-red-500" size={20} />}
        onClick={() => {}}
      />
      <IconButton
        icon={<FaHeart className="text-rose-500" size={20} />}
        onClick={() => {}}
      />
    </ButtonLayout>
  );
};

export default IconType;
