import { OverviewType } from "@/types/overview-type";
import React from "react";

export const OverviewCard: React.FC<OverviewType> = (data) => {
  const { icon: Icon } = data;

  return (
    <div className="shadow-overviewCardShadow dark:shadow-none max-w-[300px] rounded-lg bg-white p-4 dark:bg-DarkSecondary tablet:w-[140px] tablet:pl-3">
      <span className="bg-ClrEBF2 dark:bg-transparent dark:border-2 mb-4 flex h-[40px] w-[40px] items-center justify-center rounded-[10px]">
        <Icon />
      </span>
      <h1 className="mb-1 text-[13px] font-bold text-Primary dark:text-white">
        {data?.title}
      </h1>
      <div className="flex items-center">
        <p className="text-[18px] font-medium text-secondary dark:text-white">
          {data?.count ? data?.count + "K" : ""}
        </p>
        <p className="text-[18px] font-medium text-secondary dark:text-white">
          {data.rateProtsent ? data.rateProtsent + "%" : ""}
        </p>
        <p className="text-[18px] font-medium text-secondary dark:text-white">
          {data?.minutes ? data?.minutes + "m" : ""}
        </p>
        <p className="text-[18px] ml-2 font-medium text-secondary dark:text-white">
          {data.seconds ? data.seconds + "s" : ""}
        </p>
      </div>
      <p className="mt-1 text-[14px] font-medium text-Primary dark:text-white tablet:mt-[12px] tablet:text-[16px]">
        {data.protsent}%
      </p>
    </div>
  );
};
