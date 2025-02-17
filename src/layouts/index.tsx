import { Outlet } from "umi";
import { Navbar } from "@/components/common";
import { theme } from "@config/theme.config";

export default function Layout() {
  return (
    <>
      <div className="md:px-[12.6%] duration-100">
        <Navbar {...theme.NavbarProps} />
        <Outlet />
      </div>
    </>
  );
}
