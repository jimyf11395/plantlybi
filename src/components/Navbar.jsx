import { IKImage } from "imagekitio-react";
import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Logo" w={32} h={32} />
        <span>Plantly</span>
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE HAMBURGER BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "≡"}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/" href="/">
            Home
          </Link>
          <Link to="/" href="/">
            Trending
          </Link>
          <Link to="/" href="/">
            Most Popular
          </Link>
          <Link to="/" href="/">
            About
          </Link>
          <Link to="/" href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-500 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/" href="/">
          Home
        </Link>
        <Link to="/" href="/">
          Trending
        </Link>
        <Link to="/" href="/">
          Most Popular
        </Link>
        <Link to="/" href="/">
          About
        </Link>
        <SignedOut>
          <Link to="/login" href="">
            <button className="py-2 px-4 rounded-3xl bg-blue-500 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
