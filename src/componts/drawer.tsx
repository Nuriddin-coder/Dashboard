import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Link, useParams } from "react-router-dom";
import { MenuIcon } from "@/assets/icons/menu-icon";
import { CancelIcon } from "@/assets/icons/cancel-icon";
import { navDatas } from "@/data/nav-datas";
import { useLocation } from "react-router-dom";
export const DrawerMenu = () => {
  const [close, setClose] = React.useState(true);
  const params = useParams();
  const { pathname } = useLocation();

  React.useEffect(() => {
    setClose(false);
  }, [params]);

  return (
    <div>
      <Drawer direction="left" open={close} onOpenChange={setClose}>
        <DrawerTrigger asChild>
          <span>
            <MenuIcon />
          </span>
        </DrawerTrigger>
        <DrawerContent className="m-0 overflow-y-scroll border-r border-black">
          <button
            onClick={() => setClose(!close)}
            className="absolute right-[15px] top-2 text-[22px] font-bold"
          >
            <CancelIcon />
          </button>

          <div className="mt-[50px] flex flex-col gap-y-3 pl-5">
            {navDatas.map((item) => (
              <Link
                to={item.path}
                className={`flex w-[200px] ${pathname === item.path ? "activate" : ""} items-center gap-4 rounded-lg py-2 pl-4`}
              >
                <item.icon />
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
