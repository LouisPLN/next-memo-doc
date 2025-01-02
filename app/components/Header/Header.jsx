import React from "react";
import { ReactSvg } from "./ReactLogo";
import { Button } from "../Button";
import { User, ShoppingBasket } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <ReactSvg size={50} />
          <h1 className="ml-2 text-2xl font-bold">React Memo</h1>
        </div>
        <div className="flex justify-between items-center">
          <Button variant={"ghost"} className="mr-2"><ShoppingBasket /></Button>
          <Button variant={"ghost"}><User /></Button>
        </div>
    </header>
  );
};

export default Header;
