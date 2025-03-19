import React from "react";

export default function FormLoginSkeleton() {
  return (
    <div className="w-full sm:max-w-sm max-w-[340px] md:max-w-sm p-6 border mx-4 border-gray-100 min-h-[340px] rounded-xl shadow-md flex flex-col items-center bg-white justify-between">
      <div className="animate-pulse flex flex-col items-center w-full">
        <div className="h-6 w-24 bg-gray-200 rounded-md mb-2"></div>
        <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
      </div>
      <div className="flex flex-col gap-4 w-full md:max-w-[360px] text-xs">
        <div className="flex flex-col gap-2">
          <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-full bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="w-full max-w-[360px]">
        <div className="h-10 w-full bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
}
