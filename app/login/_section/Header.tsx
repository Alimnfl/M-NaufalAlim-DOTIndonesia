import { LoaderBubble } from "@/components/ui/loader-buble";
import React from "react";

export default function Header({ loading }: { loading: boolean }) {
  if (loading === true) {
    <div className="flex flex-col text-end py-4 text-white">
      <h3 className="text-2xl font-semibold flex flex-row gap-2 items-center">
        <span className="bg-green-600 text-white rounded-full p-2">@</span>
        alimnfl ongkir
      </h3>
      <LoaderBubble />
    </div>;
  }

  return (
    <div className="flex flex-col text-end py-4 text-white">
      <h3 className="text-2xl font-semibold flex flex-row gap-2 items-center">
        <span className="bg-green-600 text-white rounded-full p-2">@</span>
        alimnfl ongkir
      </h3>
      <p className="text-xs">by alimnfl</p>
    </div>
  );
}
