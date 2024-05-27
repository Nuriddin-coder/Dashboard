//// Import Icon's:
import { UsersIcon } from "@/assets/icons/users-icon";
import { SessionsIcon } from "@/assets/icons/sessions-icon";
import { BounceRateIcon } from "@/assets/icons/bounce-rate-icon";
import { DurationIcon } from "@/assets/icons/duration-icon";

export const OverViewData = [
  {
    id: 1,
    icon: UsersIcon,
    title: "Users",
    count: 72.6,
    protsent: 25,
  },
  {
    id: 2,
    icon: SessionsIcon,
    title: "Sessions",
    count: 87.2,
    protsent: 47,
  },
  {
    id: 3,
    icon: BounceRateIcon,
    title: "Bounce Rate",
    rateProtsent: 26.3,
    protsent: 28,
  },
  {
    id: 4,
    icon: DurationIcon,
    title: "Session Duration",
    minutes: 2,
    seconds: 18,
    protsent: 13,
  },
];
