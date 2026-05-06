import React from "react";

export default function Profile() {
  return (
    <div className="flex items-center text-lg font-bold">
      <h4>وحید بداقی</h4>
      <span className="h-10 w-px rounded-2xl bg-gray-400 mx-2"></span>
      <img src="/images/profilo.jpg" alt="" className="rounded-full size-12" />
    </div>
  );
}
