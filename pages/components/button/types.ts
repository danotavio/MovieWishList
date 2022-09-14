import { ReactNode } from "react";

export type Props = JSX.IntrinsicElements["button"] & {
  children?: ReactNode;
};
