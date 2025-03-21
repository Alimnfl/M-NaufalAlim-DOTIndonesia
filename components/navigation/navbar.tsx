"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ModalLogout from "../modal/ModalLogout";
import Logo from "../assets/Logo";
import { DataNavbar } from "../data/DataNavbar";
import useNav from "@/hooks/useNav";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { selected, setSelected } = useNav();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-row w-full items-center justify-between py-4 bg-white">
      <Logo />

      <div className="hidden md:flex items-center gap-4">
        {DataNavbar.map((d) => (
          <Button
            onClick={() => setSelected({ nav: d.id })}
            variant="ghost"
            className={`font-light text-green-400 hover:text-green-600 cursor-pointer ${
              selected?.nav === d.id ? "bg-accent text-green-600" : ""
            }`}
            key={d.id}
          >
            {d.name}
          </Button>
        ))}
      </div>
      <div className="w-full max-w-[160px] md:block hidden">
        <ModalLogout />
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden">
          {DataNavbar.map((d) => (
            <Button
              onClick={() => {
                setSelected({ nav: d.id });
                setIsOpen(false);
              }}
              variant="ghost"
              className={`w-full text-center text-green-400 hover:text-green-600 ${
                selected?.nav === d.id ? "bg-accent text-green-600" : ""
              }`}
              key={d.id}
            >
              {d.name}
            </Button>
          ))}

          <div className="mt-4">
            <ModalLogout />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
