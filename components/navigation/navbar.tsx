"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ModalLogout from "../modal/ModalLogout";
import Logo from "../assets/Logo";
import { DataNavbar } from "../data/DataNavbar";

function Navbar() {
  const [selectedNav, setSelectedNav] = useState("domestic");

  return (
    <div className="flex flex-row w-full h-full py-4 items-center justify-between">
      <Logo />
      <div className="w-full flex items-center gap-2">
        {DataNavbar.map((d) => (
          <Button
            onClick={() => setSelectedNav(d.id)}
            variant="ghost"
            className={` font-light text-green-400 hover:text-green-600 cursor-pointer ${
              selectedNav === d.id ? "bg-accent text-green-600" : ""
            }`}
            key={d.id}
          >
            {d.name}
          </Button>
        ))}
      </div>
      <ModalLogout />
    </div>
  );
}

export default Navbar;
