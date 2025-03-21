import { useShippingCost } from "@/hooks/useShippingCost";
import { Building2 } from "lucide-react";
import React from "react";

type CardCity = {
  data: CardCityPropsData;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  mode: string;
};

interface CardCityPropsData {
  id: number;
  label: string;
  province_name: string;
  city_name: string;
  district_name: string;
  subdistrict_name: string;
  zip_code: string;
}

export default function CardCity({
  data,
  setModalOpen,
  modalOpen,
  mode,
}: CardCity) {
  const { setSelectedCityOriginDomestic, setSelectedCityDestinationDomestic } =
    useShippingCost();
  return (
    <div
      onClick={() => {
        if (mode === "origin-domestic") {
          setSelectedCityOriginDomestic(data);
        } else if (mode === "destination-domestic") {
          setSelectedCityDestinationDomestic(data);
        }
        if (modalOpen) {
          setModalOpen(false);
        }
      }}
      className="flex flex-row justify-between items-center text-xs rounded-xl p-3 border shadow-sm border-gray-100"
    >
      <div className="flex flex-row gap-4">
        <div className="bg-green-400 text-white p-2 w-fit h-fit rounded-full">
          <Building2 />
        </div>
        <div className="flex flex-col items-start text-start gap-[2px]">
          <span className="text-sm font-medium text-green-600">
            {data?.city_name}
          </span>
          <span className="text-[10px]">
            {data?.district_name}
            {data?.subdistrict_name !== "-"
              ? `, ${data?.subdistrict_name}`
              : null}
          </span>
        </div>
      </div>
      {data?.zip_code !== "0" ? (
        <div className="bg-green-300 text-md text-green-700 rounded-xl p-3 font-semibold">
          {data?.zip_code}
        </div>
      ) : null}
    </div>
  );
}
