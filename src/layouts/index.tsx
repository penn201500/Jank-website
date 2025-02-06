import { Outlet } from "umi";
import { Navbar } from "@/components/common";

export default function Layout() {
  return (
    <div className="md:px-[12.6%]">
      <Navbar />
      <Outlet />
    </div>
  );
}
