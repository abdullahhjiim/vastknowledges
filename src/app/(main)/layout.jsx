import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { Search, SquarePen } from "lucide-react";
const navLinks = [
 
  {
    title: "Categories",
    href: "/categories",
  },
  // {
  //   title: "About",
  //   href: "/about",
  // },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: <Search size={20} strokeWidth={1.75} />,
    href: "/",
  },
  {
    title: <SquarePen size={20} strokeWidth={1.75} />,
    href: "/write",
  },
];
const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
        <div className="container flex h-20 items-center justify-between py-6 ">
          <MainNav items={navLinks} />
        </div>
      </header>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
};
export default MainLayout;
