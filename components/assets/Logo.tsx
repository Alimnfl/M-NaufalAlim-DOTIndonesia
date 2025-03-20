import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-row bg-green-400 gap-3 rounded-xl p-2 mr-24 w-full">
      <span className="text-xl text-white font-semibold  flex flex-row gap-4 items-center bg-green-600 rounded-full p-2">
        @
      </span>
      <div className="flex flex-col text-white">
        <span className="text-xl font-semibold text-green-700">
          alimnfl ongkir
        </span>
        <p className="text-xs text-green-600">by alimnfl</p>
      </div>
    </div>
  );
}
