import { Link, Outlet } from "react-router-dom";
import { Header } from "./header/header";
import { navDatas } from "../data/nav-datas";
import { MenuIcon } from "@/assets/icons/menu-icon";
import { useLocation } from "react-router-dom";

export const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="container rounded-lg tablet:grid tablet:grid-cols-colMain">
      <div className="hidden flex-col h-[730px] items-center gap-4 rounded-l-lg bg-white pb-[25px] pt-[40px] dark:bg-DarkSecondary tablet:flex">
        <span className="pb-[30px]">
          <MenuIcon />
        </span>
        {navDatas.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`group  ${location.pathname === item.path ? "activate" : ""} relative flex h-[40px] w-[50px] items-center rounded-[15px] pl-[17px] duration-300`}
          >
            <span
              className={`absolute ${location.pathname === item.path ? "activate" : ""}  -left-[19.5px] block  h-[40px] w-[4px] rounded-r-md ${location.pathname !== item.path ? "group-hover:bg-ClrC7C7" : ""} `}
            ></span>
            {<item.icon />}
          </Link>
        ))}
      </div>
      <div className="px-[15px] h-[730px] overflow-y-scroll tablet:px-[35px]">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
