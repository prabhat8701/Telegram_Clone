import React from "react";

function RoundedBtn({ icon, onClick }) {
  return (
    <button
      className="text-[#8796a1] text-xl p-2 rounded-full hover:bg-[dark]"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

export default RoundedBtn;
