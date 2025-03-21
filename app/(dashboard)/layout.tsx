import Navbar from "@/components/navigation/navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full mx-auto py-10 flex flex-col items-center justify-center px-4">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
