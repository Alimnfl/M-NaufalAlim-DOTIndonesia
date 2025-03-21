import { useShippingCost } from "@/hooks/useShippingCost";
import { Building2 } from "lucide-react";
import React from "react";

type CardCountry = {
  data: CardCountryPropsData;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  mode: string;
};

interface CardCountryPropsData {
  country_id: string;
  country_name: string;
}

export default function CardCountry({
  data,
  setModalOpen,
  modalOpen,
  mode,
}: CardCountry) {
  const { setSelectedCountry } = useShippingCost();
  return (
    <div
      onClick={() => {
        if (mode === "destination-international") {
          setSelectedCountry(data);
        }
        if (modalOpen) {
          setModalOpen(false);
        }
      }}
      className="flex flex-row gap-4 items-center text-xs rounded-xl p-3 border shadow-sm border-gray-100"
    >
      <div className="bg-green-400 text-white p-2 w-fit h-fit rounded-full">
        <Building2 />
      </div>
      <div className="flex flex-col items-start text-start gap-[2px]">
        <span className="text-sm font-medium text-green-600">
          {data?.country_name}
        </span>
      </div>
    </div>
  );
}
