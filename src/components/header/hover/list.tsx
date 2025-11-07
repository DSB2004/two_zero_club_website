import React from "react";

export default function List(
  props: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >
) {
  const { children, className, ...rest } = props;

  return (
    <li
      className={`group/list w-fit flex flex-col items-start justify-center  cursor-pointer ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}

      <div className="h-[2px] bg-black w-0 group-hover/list:w-full transition-all duration-300"></div>
    </li>
  );
}
