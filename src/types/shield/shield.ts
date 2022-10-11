import { ReactNode } from "react";

export interface ShieldChildren {
  children: ReactNode;
  auth?: boolean;
}
