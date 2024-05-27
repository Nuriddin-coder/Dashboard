//// Import Components:
import { Button } from "@/components/ui/button";
import { ChartLine } from "@/componts/chart-line";
import { OverviewCard } from "@/componts/overview-card";
import { PieGoals } from "@/componts/pie-goals";
import { PieUser } from "@/componts/pie-user";
import RadialProgress from "@/componts/radial-progress";

//// Import Data:
import { OverViewData } from "@/data/overview-datas";

export const Home = () => {
  return (
    <div>
      {/* First Section */}
      <div className="justify-between bigDesktop:flex">
        {/* Line Chart */}
        <div className="mt-4">
          <div className="mb-1 flex items-end justify-between px-2 tablet:w-[620px] bigDesktop:w-[650px]">
            <h1 className="text-[20px] font-bold text-secondary dark:text-white">
              Performance
            </h1>
            <p className="text-[14px] font-bold text-Primary dark:text-white">
              Year
            </p>
          </div>
          <div>
            <ChartLine />
          </div>
        </div>

        {/* Radial Progress */}
        <div className="mt-4">
          <div className="mb-1 flex items-end justify-between px-2 tablet:w-[500px] bigDesktop:w-[500px]">
            <h1 className="text-[20px] font-bold text-secondary dark:text-white">
              Sessions By Device
            </h1>
            <p className="text-[14px] font-bold text-Primary dark:text-white">
              Year
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-lg bg-white py-3 dark:bg-DarkSecondary tablet:w-[500px] tablet:flex-row tablet:gap-[10px] tablet:px-8 bigDesktop:h-[300px]  bigDesktop:w-[500px]">
            <RadialProgress />
            <div className="flex gap-7 tablet:flex-col tablet:gap-4">
              <div>
                <h2 className="font-bold text-Clr563B">Desktop</h2>
                <span className="flex items-center gap-1">
                  <p className="text-[18px] font-medium text-secondary dark:text-ClrC7C7">
                    8,005
                  </p>
                  <p className="text-[13px] font-medium text-Primary dark:text-white">
                    13%
                  </p>
                </span>
              </div>
              <div>
                <h2 className="font-bold text-ClrFF70">Mobile</h2>
                <span className="flex items-center gap-1">
                  <p className="text-[18px] font-medium text-secondary dark:text-ClrC7C7">
                    5,855
                  </p>
                  <p className="text-[13px] font-medium text-Primary dark:text-white">
                    37%
                  </p>
                </span>
              </div>
              <div>
                <h2 className="font-bold text-Clr20C9">Tablets</h2>
                <span className="flex items-center gap-1">
                  <p className="text-[18px] font-medium text-secondary dark:text-ClrC7C7">
                    2,102
                  </p>
                  <p className="text-[13px] font-medium text-Primary dark:text-white">
                    78%
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="justify-between bigDesktop:flex">
        {/* Overview Bar */}
        <div className="tablet:w-[650px]">
          <div className="my-[30px] grid grid-cols-2 gap-4 tablet:flex tablet:gap-[30px]">
            {OverViewData.map((data) => (
              <OverviewCard key={data.id} {...data} />
            ))}
          </div>
          <div className="flex items-center justify-between px-2 pt-[18px]">
            <p className="text-[20px] font-bold text-secondary dark:text-white">
              Daily Overview
            </p>
            <Button className="bg-ClrFEFE rounded-[10px] text-secondary hover:bg-Clr563B hover:text-white">
              View Details
            </Button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="my-[30px] rounded-lg bg-white px-2 py-3 dark:bg-DarkSecondary tablet:max-w-[500px] tablet:px-4">
          <h1 className="mb-5 text-[20px] font-bold text-secondary dark:text-white">
            Sessions By Device
          </h1>
          <div className="flex items-center justify-between gap-2 border-b border-ClrA3AB px-1 pb-[22px] ">
            <p className="font-bold text-secondary dark:text-white">Channel</p>
            <p className="font-bold text-secondary dark:text-white tablet:mr-[190px]">
              Traffics (%)
            </p>
            <p className="font-bold text-secondary dark:text-white">Value</p>
          </div>

          <div className="mb-2 flex items-center justify-between gap-[25px] pt-[18px] seconMobile:mb-4 tablet:mb-3 tablet:gap-[40px] desktop:mb-4">
            <div className="mb-1 text-[14px] font-medium text-Primary dark:text-white tablet:text-[16px]">
              Desktop
            </div>

            <div className="ml-[10px] h-2 w-[300px] rounded-full bg-ClrF2F3">
              <div className="h-2 w-1/4 rounded-full bg-Clr563B"></div>
            </div>
            <p className="text-[14px] text-Primary dark:text-white tablet:text-[16px]">
              22%
            </p>
          </div>

          <div className="mb-2 flex items-center justify-between gap-[25px] seconMobile:mb-4 tablet:mb-3 tablet:gap-[40px] desktop:mb-4">
            <div className="mb-1 text-[14px] font-medium text-Primary dark:text-white tablet:text-[16px]">
              Mobile
            </div>

            <div className="ml-[19px] h-2 w-[300px] rounded-full bg-ClrF2F3">
              <div className="h-2 w-1/2 rounded-full bg-ClrFF70"></div>
            </div>
            <p className="text-[14px] text-Primary dark:text-white tablet:text-[16px]">
              51%
            </p>
          </div>

          <div className="mb-2 flex items-center justify-between gap-[25px] tablet:gap-[40px]">
            <div className="mb-1 text-[14px] font-medium text-Primary dark:text-white tablet:text-[16px]">
              Tablets
            </div>

            <div className="ml-[19px] h-2 w-[300px] rounded-full bg-ClrF2F3">
              <div className="h-2 w-[80%] rounded-full bg-Clr20C9"></div>
            </div>
            <p className="text-[14px] text-Primary dark:text-white tablet:text-[16px]">
              79%
            </p>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bigDesktop:flex justify-between py-4 items-start">
        <div className="flex flex-col gap-4 bigDesktop:w-[650px] bigDesktop:flex-row bigDesktop:justify-between">
          <div className="flex max-w-[350px] items-center justify-center gap-[45px] rounded-lg bg-white py-[30px] dark:bg-DarkSecondary tablet:max-w-[410px] tablet:py-[40px] bigDesktop:w-[310px] bigDesktop:gap-[30px] bigDesktop:py-[30px]">
            <div>
              <p className="text-[22px] font-medium text-secondary dark:text-white">
                5,402
              </p>
              <p className="text-[14px] font-bold text-Primary dark:text-white">
                Today
              </p>
            </div>
            <PieUser />
            <div>
              <p className="text-[22px] font-medium text-secondary dark:text-white">
                6,111
              </p>
              <p className="text-[14px] font-bold text-Primary dark:text-white">
                Expected
              </p>
            </div>
          </div>
          <div className="flex max-w-[350px] items-center justify-center gap-[45px] rounded-lg bg-white py-[30px] dark:bg-DarkSecondary tablet:max-w-[410px] tablet:py-[40px] bigDesktop:w-[310px] bigDesktop:gap-[30px] bigDesktop:py-[30px]">
            <div>
              <p className="text-[22px] font-medium text-secondary dark:text-white">
                8,807
              </p>
              <p className="text-[14px] font-bold text-Primary dark:text-white">
                Today
              </p>
            </div>
            <PieGoals />
            <div>
              <p className="text-[22px] font-medium text-secondary dark:text-white">
                9,102
              </p>
              <p className="text-[14px] font-bold text-Primary dark:text-white">
                Expected
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 bigDesktop:mt-[0px] bigDesktop:h-[150px] flex flex-col items-center rounded-lg bg-white py-[30px] dark:bg-DarkSecondary seconMobile:w-[500px] seconMobile:flex-row seconMobile:justify-between seconMobile:px-[30px]">
          <div className="mb-4 bigDesktop:m-0 text-center seconMobile:m-0 seconMobile:text-start">
            <p className="text-[20px] dark:text-white bigDesktop:mb-[10px] font-bold text-secondary">
              Sessions By Device
            </p>
            <p className="text-[13px] dark:text-white font-medium text-ClrA3AB">
              Top Region & session
            </p>
          </div>
          <Button className="w-[131px] tablet:hover:scale-105 duration-300 rounded-[10px] bg-Clr563B text-white">
            View
          </Button>
        </div>
      </div>
    </div>
  );
};
