import { type FC, useState } from "react";
import { Link } from "umi";
import {
  Button,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/shadcn";
import { Menu } from "lucide-react";
import { ThemeProvider, ModeToggle } from "@/components/ui/shadcn";
import type { MenuItem } from "@/types";
import React from "react";

export interface NavbarProps {
  menu: MenuItem[];
}

const Navbar: FC<NavbarProps> = React.memo(({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const MobileMenu = () => (
    <DialogContent className="w-[300px] sm:w-[400px]">
      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <div key={item.key}>
            {item.children ? (
              <div>
                <h2>{item.title}</h2>
                <ul>
                  {item.children.map((child) => (
                    <li key={child.key}>
                      <Link to={child.link} onClick={() => setIsOpen(false)}>
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link to={item.link} onClick={() => setIsOpen(false)}>
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </DialogContent>
  );

  return (
    <>
      <div className="border-b h-14 justify-between mb-4 flex px-4 sm:px-6 items-center">
        {/* 左侧: logo & menu */}
        <div className="flex items-center space-x-4">
          <div>
            <NavigationMenu>
              <NavigationMenuLink asChild>
                <Link to="/">
                  <span className="font-bold text-xl">Jank</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenu>
          </div>

          {/* menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger>
                          <span>{item.title}</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul>
                            {item.children.map((child) => (
                              <li key={child.key}>
                                <NavigationMenuLink asChild>
                                  <Link to={child.link}>{child.title}</Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Button variant="ghost" size="default">
                          <Link to={item.link}>{item.title}</Link>
                        </Button>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* 右侧: mobile menu trigger and theme toggle */}
        <div className="flex items-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </DialogTrigger>
            <MobileMenu />
          </Dialog>
          <ThemeProvider>
            <ModeToggle />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
});

export { Navbar };
