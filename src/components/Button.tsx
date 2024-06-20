import React from "react";

export type ButtonProps = React.PropsWithChildren<{}>;

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-primary px-4 py-2 rounded-[4px] w-full  active:bg-primary-light active:cursor-default hover:cursor-pointer">
      {children}
    </button>
  );
}
