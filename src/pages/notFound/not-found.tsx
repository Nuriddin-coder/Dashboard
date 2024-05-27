//// Img Import:
import NotFoundImg from "@/assets/imgs/not-fouund.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto rounded-xl dark:bg-DarkSecondary bg-white desktop:flex items-center  gap-[40px]">
      <img className="pt-4 w-[360px] bigDesktop:w-[800px] bigDesktop:py-[60px] desktop:py-[50px] tablet:w-[450px] desktop:w-[600px] desktop:m-0 mx-auto" src={NotFoundImg} alt="img" />
      <div className="pt-2 text-center">
        <h1 className="text-[32px] desktop:text-[40px] font-bold">!Ooops,</h1>
        <p className="text-[20px] desktop:text-[22px] font-bold">Page Not Found</p>
        <div className="py-4">
          <Button
            onClick={() => navigate("/")}
            className=" bg-Clr563B text-white"
          >
            Back To Home
          </Button>
        </div>
      </div>
    </div>
  );
};
