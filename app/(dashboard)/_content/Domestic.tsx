import { Input } from "@/components/ui/input";
import { useShippingCost } from "@/hooks/useShippingCost";
import React, { useEffect, useState } from "react";
import ModalSelectCityDomestic from "../_component/ModalSelectCity";
import { Button } from "@/components/ui/button";
import AlertAnnouncement from "@/components/ui/alert-announcement";
import DomesticSkeleton from "./DomesticSkeleton";

export default function Domestic() {
  const { getDomesticDestination, setReqQuerySearch, reqQuerySearch } =
    useShippingCost();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DomesticSkeleton />;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="bg-green-300 font-medium text-green-700 p-1 text-[10px] w-fit">
        Ongkir Domestik Alimnfl
      </div>
      <h2 className="font-semibold text-xl">
        Pengecekan Ongkos Kirim Domestik
      </h2>
      <AlertAnnouncement
        title="Catatan Pengecekan Ongkir Domestik"
        className=""
        description="Pastikan semua terisi agar bisa melanjutkan ke tahap selanjutnya!"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Kota Asal :</h3>
        <ModalSelectCityDomestic mode={"origin-domestic"} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Kota Tujuan :</h3>
        <ModalSelectCityDomestic mode={"destination-domestic"} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Berat Kiriman :</h3>
        <Input type="number" placeholder="Berat kiriman (dalam bentuk gram)" />
      </div>
      <Button className="w-full cursor-pointer bg-green-600 hover:bg-green-400 disabled:bg-green-300">
        Periksa Ongkir
      </Button>
    </div>
  );
}
