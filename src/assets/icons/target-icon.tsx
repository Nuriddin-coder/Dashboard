import { useLocation } from "react-router-dom";

export const TargetIcon = () => {
  const { pathname } = useLocation();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        className={pathname === "/target" ? "fill-white" : ""}
        d="M7.99988 16C5.78743 16 3.87988 15.2089 2.33232 13.648C0.784767 12.0916 -0.00012207 10.1911 -0.00012207 8C-0.00012207 5.78844 0.785656 3.88089 2.33499 2.33333C3.88166 0.785778 5.78832 0 7.99988 0C10.1919 0 12.0923 0.784889 13.6479 2.33244C15.2079 3.88089 15.9999 5.78844 15.9999 8C15.9999 10.1911 15.2088 12.0924 13.6497 13.6507C12.0932 15.2089 10.1928 16 7.99988 16ZM7.99988 1.77778C6.25232 1.77778 4.81054 2.37067 3.59277 3.59111C2.37143 4.81067 1.77766 6.25244 1.77766 8C1.77766 9.728 2.37143 11.1662 3.59366 12.3956C4.81321 13.6249 6.2541 14.2222 7.99988 14.2222C9.72699 14.2222 11.1643 13.624 12.3919 12.3938C13.6239 11.1636 14.2221 9.72533 14.2221 8C14.2221 6.25511 13.6248 4.81333 12.3954 3.59378C11.1661 2.37156 9.72877 1.77778 7.99988 1.77778ZM5.33321 10.2222C4.10743 10.2222 3.11099 9.22578 3.11099 8C3.11099 6.77422 4.10743 5.77778 5.33321 5.77778C6.55899 5.77778 7.55543 6.77422 7.55543 8C7.55543 9.22578 6.55899 10.2222 5.33321 10.2222ZM5.33321 6.66667C4.5981 6.66667 3.99988 7.26489 3.99988 8C3.99988 8.73511 4.5981 9.33333 5.33321 9.33333C6.06832 9.33333 6.66654 8.73511 6.66654 8C6.66654 7.26489 6.06832 6.66667 5.33321 6.66667ZM10.6665 10.2222C9.44077 10.2222 8.44432 9.22578 8.44432 8C8.44432 6.77422 9.44077 5.77778 10.6665 5.77778C11.8923 5.77778 12.8888 6.77422 12.8888 8C12.8888 9.22578 11.8923 10.2222 10.6665 10.2222Z"
        fill="#C7C7D2"
      />
    </svg>
  );
};
