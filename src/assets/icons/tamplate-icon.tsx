import { useLocation } from "react-router-dom";

export const TamplateIcon = () => {
  const { pathname } = useLocation();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={14}
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        className={`${pathname === "/tamplates" ? "stroke-white" : ""}`}
        d="M13.1904 1H2.5237C1.68212 1 0.999878 1.59696 0.999878 2.33334V11.6667C0.999878 12.4031 1.68212 13.0001 2.5237 13.0001H13.1904C14.032 13.0001 14.7143 12.4031 14.7143 11.6667V2.33334C14.7143 1.59696 14.032 1 13.1904 1Z"
        stroke="#C7C7D2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={`${pathname === "/tamplates" ? "stroke-white" : ""}`}
        d="M0.999878 5.00114H14.7143"
        stroke="#C7C7D2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={`${pathname === "/tamplates" ? "stroke-white" : ""}`}
        d="M5.57104 13.0012V5.00114"
        stroke="#C7C7D2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
