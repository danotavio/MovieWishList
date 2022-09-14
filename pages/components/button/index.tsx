import { FC } from "react";
import { Props } from "./types";

export const Button: FC<Props> = ({ children, ...rest }) => {
  return (
    <button className="p-2 hover:bg-slate-500 hover:rounded-md">
      {children}
    </button>
  );
};
