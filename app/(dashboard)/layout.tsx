import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-full ">
      <div className="max-w-3xl mx-auto py-10 flex flex-col ">{children}</div>
    </main>
  );
}
