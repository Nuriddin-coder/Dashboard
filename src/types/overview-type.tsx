import { IconType } from "react-icons";

export interface OverviewType {
  id: number;
  title: string;
  count?: number;
  icon: IconType;
  minutes?: number;
  seconds?: number;
  rateProtsent?: number;
  protsent: number;
}
