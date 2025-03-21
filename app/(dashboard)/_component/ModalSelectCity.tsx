import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2 } from "lucide-react";
import { useShippingCost } from "@/hooks/useShippingCost";
import CardCity from "./CardCity";
import axios from "axios";

export default function ModalSelectCityDomestic({ mode }: { mode: string }) {
  const {
    setReqQuerySearch,
    reqQuerySearch,
    getDomesticDestination,
    statusGetDomesticDestination,
    selectedCityOriginDomestic,
    selectedCityDestinationDomestic,
    GetDomesticDestination,
  } = useShippingCost();
  const [modalOpen, setModalOpen] = useState(false);

  console.log(getDomesticDestination);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReqQuerySearch({ [name]: value });
  };

  const domesticDestinations = {
    meta: {
      message: "Success Get Domestic Destinations",
      code: 200,
      status: "success",
    },
    data: [
      {
        id: 17471,
        label: "-, JAKARTA, DKI JAKARTA, DKI JAKARTA, 0",
        province_name: "DKI JAKARTA",
        city_name: "DKI JAKARTA",
        district_name: "JAKARTA",
        subdistrict_name: "-",
        zip_code: "0",
      },
      {
        id: 17472,
        label: "-, JAKARTA BARAT, JAKARTA BARAT, DKI JAKARTA, 0",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA BARAT",
        district_name: "JAKARTA BARAT",
        subdistrict_name: "-",
        zip_code: "0",
      },
      {
        id: 17529,
        label: "-, JAKARTA SELATAN, JAKARTA SELATAN, DKI JAKARTA, 0",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA SELATAN",
        district_name: "JAKARTA SELATAN",
        subdistrict_name: "-",
        zip_code: "0",
      },
      {
        id: 17595,
        label: "-, JAKARTA PUSAT, JAKARTA PUSAT, DKI JAKARTA, 0",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA PUSAT",
        district_name: "JAKARTA PUSAT",
        subdistrict_name: "-",
        zip_code: "0",
      },
      {
        id: 17640,
        label: "-, JAKARTA UTARA, JAKARTA UTARA, DKI JAKARTA, 0",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA UTARA",
        district_name: "JAKARTA UTARA",
        subdistrict_name: "-",
        zip_code: "0",
      },
      {
        id: 17672,
        label: "-, JAKARTA TIMUR, JAKARTA TIMUR, DKI JAKARTA, 0",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA TIMUR",
        district_name: "JAKARTA TIMUR",
        subdistrict_name: "-",
        zip_code: "0",
      },
      {
        id: 17473,
        label: "GROGOL, GROGOL PETAMBURAN, JAKARTA BARAT, DKI JAKARTA, 11450",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA BARAT",
        district_name: "GROGOL PETAMBURAN",
        subdistrict_name: "GROGOL",
        zip_code: "11450",
      },
      {
        id: 17474,
        label: "JELAMBAR, GROGOL PETAMBURAN, JAKARTA BARAT, DKI JAKARTA, 11460",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA BARAT",
        district_name: "GROGOL PETAMBURAN",
        subdistrict_name: "JELAMBAR",
        zip_code: "11460",
      },
      {
        id: 17475,
        label:
          "JELAMBAR BARU, GROGOL PETAMBURAN, JAKARTA BARAT, DKI JAKARTA, 11460",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA BARAT",
        district_name: "GROGOL PETAMBURAN",
        subdistrict_name: "JELAMBAR BARU",
        zip_code: "11460",
      },
      {
        id: 17476,
        label:
          "TANJUNG DUREN SELATAN, GROGOL PETAMBURAN, JAKARTA BARAT, DKI JAKARTA, 11470",
        province_name: "DKI JAKARTA",
        city_name: "JAKARTA BARAT",
        district_name: "GROGOL PETAMBURAN",
        subdistrict_name: "TANJUNG DUREN SELATAN",
        zip_code: "11470",
      },
    ],
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (reqQuerySearch?.search !== "") {
        GetDomesticDestination(reqQuerySearch);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [reqQuerySearch]);
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger>
        {mode === "origin-domestic" ? (
          selectedCityOriginDomestic?.id === 0 ? (
            <div className="cursor-pointer font-medium w-full h-full rounded-xl flex flex-row gap-2 border border-gray-100  p-4">
              <Building2 />
              Pilih Kota
            </div>
          ) : (
            <CardCity
              mode="origin-domestic"
              data={selectedCityOriginDomestic}
              setModalOpen={setModalOpen}
              modalOpen={modalOpen}
            />
          )
        ) : mode === "destination-domestic" ? (
          selectedCityDestinationDomestic?.id === 0 ? (
            <div className="cursor-pointer font-medium w-full h-full rounded-xl flex flex-row gap-2 border border-gray-100  p-4">
              <Building2 />
              Pilih Kota
            </div>
          ) : (
            <>
              <CardCity
                mode={mode}
                data={selectedCityDestinationDomestic}
                setModalOpen={setModalOpen}
                modalOpen={modalOpen}
              />
            </>
          )
        ) : null}
      </DialogTrigger>
      <DialogContent
        hideClose={true}
        className="w-full flex flex-col gap-1 max-h-[620px] h-full max-w-3xl"
      >
        <div className="bg-green-300 font-medium text-green-700 p-1 text-[10px] w-fit">
          Kota Domestik Alimnfl
        </div>
        <div className="flex flex-col gap-2 w-full py-2 justify-between h-fit">
          <DialogTitle className="font-semibold">Cek Kota Asal</DialogTitle>
          <div className="flex flex-row w-full gap-2">
            <Input
              onChange={onChangeInput}
              type="text"
              placeholder="Cari disini..."
              name="search"
              value={reqQuerySearch?.search}
            />
          </div>
        </div>
        <ScrollArea className=" h-full max-h-[450px]">
          <div className="flex flex-col gap-2">
            {domesticDestinations?.data?.map((data, index) => (
              <CardCity
                mode={mode}
                data={data}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                key={index}
              />
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
