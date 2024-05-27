import { ModeToggle } from "@/componts/mode-toggle";

//// Import Icon's:
import { NotificationIcon } from "@/assets/icons/notification-icon";
import { MessageIcon } from "@/assets/icons/message-icon";
import { DrawerMenu } from "@/componts/drawer";

//// Import Img's:
import AavatarImg from "@/assets/imgs/avatar.webp";
import { SearchIcon } from "@/assets/icons/search-icon";
export const Header = () => {
  return (
    <div className="container py-2 ">
      <div className="flex items-center justify-between border-b pb-2 border-secondary tablet:border-none">
        <div>
          <span className="tablet:hidden">
            <DrawerMenu />
          </span>

          <div className="hidden tablet:flex items-center gap-[10px] px-4 py-[14px] mt-3 w-[334px]  dark:bg-DarkSecondary bg-white rounded-[10px]">
            <SearchIcon />
            <input
              className="text-[14px] dark:text-white dark:placeholder:text-white text-Primary bg-transparent outline-none"
              type="text"
              placeholder="Search Anything"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 tablet:gap-4 desktop:gap-5">
          <span className="cursor-pointer">
            <MessageIcon />
          </span>
          <div className="relative cursor-pointer">
            <NotificationIcon />
            <span className="absolute w-[14px] text-[10px] h-[14px] flex items-center justify-center left-[8px] -top-[6px] tablet:left-[10px] tablet:-top-[5px] rounded-full bg-Clr563B text-white">
              5
            </span>
          </div>
          <img
            className="rounded-full cursor-pointer border-2 border-transparent dark:border-white w-[32px] h-[32px] tablet:w-[38px] tablet:h-[38px]"
            src={AavatarImg}
            alt="img"
          />
          <span className="ml-[10px]">
            <ModeToggle />
          </span>
        </div>
      </div>

      {/* Search for Mobile */}
      <div className="flex tablet:hidden items-center gap-[10px] px-4 py-[14px] mx-auto mt-3 max-w-[270px] seconMobile:max-w-[380px] dark:bg-DarkSecondary bg-white rounded-[10px]">
        <SearchIcon />
        <input
          className="text-[14px] dark:text-white dark:placeholder:text-white text-Primary bg-transparent outline-none"
          type="text"
          placeholder="Search Anything"
        />
      </div>
    </div>
  );
};
