import useNav from "@/hooks/useNav";
import React from "react";
import Domestic from "../_content/Domestic";
import International from "../_content/International";
import TrackPacket from "../_content/TrackPacket";

export default function ContentManage() {
  const { selected } = useNav();
  const contentManage = () => {
    if (selected?.nav === "domestic") {
      return <Domestic />;
    } else if (selected?.nav === "international") {
      return <International />;
    } else if (selected?.nav === "trackpacket") {
      return <TrackPacket />;
    }
  };
  return <main className="py-10 w-full">{contentManage()}</main>;
}
