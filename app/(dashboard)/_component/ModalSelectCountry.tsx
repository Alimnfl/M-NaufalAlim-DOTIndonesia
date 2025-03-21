import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { School2 } from "lucide-react";
import { useShippingCost } from "@/hooks/useShippingCost";
import CardCountry from "./CardCountry";

export default function ModalSelectCountry({ mode }: { mode: string }) {
  const {
    setReqQuerySearch,
    reqQuerySearch,
    selectedCountry,
    GetDomesticDestination,
  } = useShippingCost();
  const [modalOpen, setModalOpen] = useState(false);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReqQuerySearch({ [name]: value });
  };

  const internationalDestinations = {
    meta: {
      message: "Success Get International Destination",
      code: 200,
      status: "success",
    },
    data: [
      {
        country_id: "84",
        country_name: "India",
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
        {mode === "destination-international" ? (
          selectedCountry?.country_id === "" ? (
            <div className="cursor-pointer text-sm items-center font-medium w-full h-full rounded-xl flex flex-row gap-5 border border-gray-100  p-4">
              <School2 size={22} />
              Pilih Negara
            </div>
          ) : (
            <CardCountry
              mode="destination-international"
              data={selectedCountry}
              setModalOpen={setModalOpen}
              modalOpen={modalOpen}
            />
          )
        ) : null}
      </DialogTrigger>
      <DialogContent className="w-full flex flex-col gap-1 max-h-[620px] h-full max-w-[350px] md:max-w-3xl">
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
            {internationalDestinations?.data?.map((data, index) => (
              <CardCountry
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
