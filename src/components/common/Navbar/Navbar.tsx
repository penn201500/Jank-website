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
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/shadcn";
import { Menu } from "lucide-react";
import { ThemeProvider, ModeToggle } from "@/components/ui/shadcn";
import Auth from "@/components/common/Auth/Auth";
import type { MenuItem } from "@/types";
import React from "react";
import { useAuthStore } from "@/store/Auth";

export interface routes {
  menu: MenuItem[];
}

const Navbar: FC<routes> = React.memo(({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { accessToken, userInfo } = useAuthStore();

  const MobileMenu = () => (
    <DialogContent className="w-[300px] sm:w-[400px] shadow-none">
      <nav className="flex flex-col gap-3 py-2">
        {menu.map((item) => (
          <div key={item.key} className="px-1">
            {item.children ? (
              <div className="space-y-2">
                <h2 className="font-medium text-base">{item.title}</h2>
                <ul className="space-y-2 pl-3">
                  {item.children.map((child) => (
                    <li key={child.key}>
                      <Link
                        to={child.link}
                        onClick={() => setIsOpen(false)}
                        className="text-foreground/70 hover:text-foreground transition-colors"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
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
      <div className="border-b h-14 justify-between mb-4 flex px-4 sm:px-6 items-center min-w-[320px] bg-background">
        {/* 左侧: logo & menu */}
        <div className="flex items-center space-x-4 min-w-[120px] h-14">
          <div className="w-[60px] h-14 flex items-center">
            <NavigationMenu>
              <NavigationMenuLink asChild>
                <Link to="/" className="hover:no-underline">
                  <span className="font-bold text-xl">Jank</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenu>
          </div>

          {/* menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="shadow-none">
                {menu.map((item) => (
                  <NavigationMenuItem key={item.key}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="shadow-none">
                          <span>{item.title}</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="shadow-none">
                          <ul className="p-2">
                            {item.children.map((child) => (
                              <li key={child.key} className="py-1">
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={child.link}
                                    className="block px-3 py-1.5 text-foreground/80 hover:text-foreground transition-colors hover:bg-transparent"
                                  >
                                    {child.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Button
                          variant="ghost"
                          size="default"
                          className="shadow-none hover:bg-transparent"
                        >
                          <Link
                            to={item.link}
                            className="text-foreground/80 hover:text-foreground transition-colors"
                          >
                            {item.title}
                          </Link>
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
        <div className="flex items-center space-x-2 min-w-[120px] h-14">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden shadow-none hover:bg-transparent h-10 w-10 flex items-center justify-center"
              >
                <Menu />
              </Button>
            </DialogTrigger>
            <MobileMenu />
          </Dialog>
          <ThemeProvider>
            <div className="[&>button]:shadow-none [&>button]:hover:bg-transparent h-10 flex items-center">
              <ModeToggle />
            </div>
          </ThemeProvider>
          {accessToken && userInfo ? (
            <Button
              variant="ghost"
              size="icon"
              className="shadow-none rounded-full h-9 w-9 p-0 overflow-hidden"
              onClick={() => (window.location.href = "/console")}
            >
              <Avatar className="h-full w-full">
                <AvatarImage src={userInfo.avatar} alt={userInfo.nickname} />
                <AvatarFallback>{userInfo.nickname?.[0] || "U"}</AvatarFallback>
              </Avatar>
            </Button>
          ) : (
            <Auth />
          )}
        </div>
      </div>
    </>
  );
});

export { Navbar };
