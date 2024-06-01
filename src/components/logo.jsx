import logo from "@/assets/vast_knowledges_logo.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[100px]", className)} src={logo} alt="logo" />
  );
};
