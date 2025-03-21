import React from "react";

export default function DomesticSkeleton() {
  return (
    <div className="flex flex-col gap-4 animate-pulse w-full">
      <div className="h-4 w-32 bg-gray-300 rounded" />
      <div className="h-6 w-3/4 bg-gray-300 rounded" />
      <div className="h-16 w-full bg-gray-200 rounded-md" />
      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 bg-gray-300 rounded" />
        <div className="h-10 w-full bg-gray-200 rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 bg-gray-300 rounded" />
        <div className="h-10 w-full bg-gray-200 rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-24 bg-gray-300 rounded" />
        <div className="h-10 w-full bg-gray-200 rounded-md" />
      </div>
      <div className="h-12 w-full bg-gray-300 rounded-md" />
    </div>
  );
}
