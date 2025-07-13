"use client";

import { useState } from "react";
import { Menu, Rocket, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold flex">
          KenzyBoost <Rocket className="mx-2"/>
        </a>

        {/* Toggle Button (mobile) */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            open ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent px-4 py-4 lg:p-0 z-50`}
        >
          <a href="#" className="block py-2 lg:py-0 hover:text-yellow-400">
            Home
          </a>
          <a href="../about" className="block py-2 lg:py-0 hover:text-yellow-400">
            About
          </a>
          <a href="../services" className="block py-2 lg:py-0 hover:text-yellow-400">
            Our Services
          </a>
          <a href="../pricing" className="block py-2 lg:py-0 hover:text-yellow-400">
            Pricing
          </a>
        </div>
      </div>
    </nav>
  );
}
