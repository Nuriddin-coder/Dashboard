export const PieUser = () => {
  return (
    <div className="relative h-[90px] rounded-full   w-[90px] bg-transparent">
      <svg className="h-full w-full -rotate-90 transform">
        <circle
          cx="50%"
          cy="50%"
          r="35"
          stroke="#E5E7EB"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50%"
          cy="50%"
          r="35"
          stroke="#6366F1"
          strokeWidth="10"
          strokeDasharray="70 100"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <div className="bg-ClrEBF2 dark:bg-transparent absolute right-[15px] top-[14.6px] flex h-[60px] w-[60px] items-center justify-center rounded-full">
        <span className="text-[12px] font-medium text-Clr563B dark:text-white">USERS</span>
      </div>
    </div>
  );
};
