import React, { useState, useEffect } from "react";
import SearchIcon from "../icons/search";
import Popular from "./popular";
import Trends from "./trends";
import Colors from "./colors";
import SearchForm from "./form";
import Features from "./features";
export default function DesktopSearch() {
  const [open, toggle] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <SearchIcon
        className="w-5 h-5 xs:w-7 xs:h-7 cursor-pointer hidden lg:block"
        onClick={() => toggle((val) => !val)}
      />
      <div
        className={`hidden lg:block fixed rounded-2xl p-2 px-4 transition-all duration-200  ${
          open ? "top-10" : "-top-200"
        } left-1/2 -translate-x-1/2 bg-green shadow-2xl p-4 z-[1000] overflow-hidden w-[95svw] max-w-[1400px]`}
      >
        <SearchForm toggle={toggle}></SearchForm>
        <div className=" grid grid-cols-4 m-10 gap-5 ">
          <Features onClick={toggle}></Features>
          <Popular onClick={toggle} />
          <Trends onClick={toggle} />
          <Colors onClick={toggle} />
        </div>
      </div>
      <div
        onClick={() => toggle(false)}
        className={`${
          open ? "hidden lg:block" : "hidden"
        } bg-[#00000050] top-0 left-0 z-[999] h-screen w-screen fixed  `}
      />
    </>
  );
}
