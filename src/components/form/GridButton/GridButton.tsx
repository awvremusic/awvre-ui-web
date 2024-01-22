import React from "react";
import { GridButtonProps } from "./GridButton.types";

const GridButton: React.FC<GridButtonProps> = ({
  onClick,
  className,
  disabled,
  leftComponent,
  rightComponent,
  children,
  backgroundColor,
}) => {
  return (
    <button
      className={` disabled:bg-gray-500 text-white font-black py-2 px-4 rounded-md ${className ?? ""} grid grid-cols-5 grid-rows-1 gap-4 items-center justify-center w-full`}
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: backgroundColor ?? "blue" }}
    >
      <span className="col-start-1  col-end-2 row-start-1">
        {leftComponent}
      </span>
      <span
        className={`col-start-2 col-span-3 row-start-1 flex flex-row justify-center items-center h-100`}
      >
        {children}
      </span>
      <span className="col-start-5  col-span-1 row-start-1">
        {rightComponent}
      </span>
    </button>
  );
};

export default GridButton;
