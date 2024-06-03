"use client";

import vksLogo from "@/assets/vast_knowledges_logo.svg";
import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";

import { Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { buttonVariants } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
export function MainNav({ items, session, children }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "http://localhost:1112/login" });
  };

  return (
    <>
      <div className="flex gap-6 lg:gap-10">
        <Link href="/">
          <Image className="max-w-[100px]" src={vksLogo} alt="Logo" />
        </Link>

        {showMobileMenu && items && (
          <MobileNav items={items}>{children}</MobileNav>
        )}
      </div>
      <nav className="flex items-center gap-3">
        <div className="items-center gap-3 hidden lg:flex">
          {items?.length ? (
            <nav className="hidden gap-6 lg:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}

          {!session?.user && (
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
            >
              Login
            </Link>
          )}
        </div>
        {session?.user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-4">
              <DropdownMenuItem className="cursor-pointer m-1" asChild>
                <Link href="/account">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer m-1" asChild>
                <Link href="/account/my-blogs">My Blogs</Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer m-1" asChild>
                <Link href="#" onClick={handleSignOut}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        <button
          className="flex items-center space-x-2 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Menu />}
        </button>
      </nav>
    </>
  );
}
