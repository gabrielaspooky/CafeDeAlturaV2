import React from "react";

const Buttons = ({ text, typeBtn }) => {
  const buttonStyle = () => {
    switch (typeBtn) {
      case "green":
        return "px-6 py-3 bg-[#2A5B45] rounded text-white";
      case "gray":
        return "px-6 py-3 bg-[#515051] rounded text-white";
      case "black":
        return "px-6 py-3 bg-[#1F1815] rounded text-white";
      case "add":
        return "p-2 text-white rounded bg-[#2A5B45B2] hover:bg-[#2A5B45]";
      case "white":
        return "px-6 py-3 rounded text-[#2A5B45]";
      default:
        return "px-6 py-3 bg-gray-200 rounded text-black"; // Estilo por defecto
    }
  };

  return (
    <a
      className={`font-semibold leading-4 text-[14px] ${buttonStyle()}`}
      href=""
    >
      {text}
    </a>
  );
};

export default Buttons;
