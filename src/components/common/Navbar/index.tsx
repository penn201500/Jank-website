import { type FC, useState } from "react";
import { Link } from "umi";
import { menu, type MenuItem } from "~/config/menu.config";
import {
  NavigationMenu,
  Button,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/shadcn";
import { ThemeProvider, ModeToggle } from "@/components/ui/shadcn";
import { Menu } from "lucide-react";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MobileMenu = () => (
    <DialogContent className="w-[300px] sm:w-[400px]">
      <nav className="flex flex-col gap-4">
        {menu.map((item: MenuItem) => (
          <div key={item.key}>
            {item.children ? (
              <div>
                <h2 className="mb-2 font-semibold">{item.title}</h2>
                <ul className="pl-4">
                  {item.children.map((child: MenuItem) => (
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
    <div className="border-b h-14 justify-between mb-4 flex px-4 sm:px-6 items-center">
      {/* 左侧: logo & menu */}
      <div className="flex items-center space-x-6">
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
              {menu.map((item: MenuItem) => (
                <NavigationMenuItem key={item.key}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger>
                        <span>{item.title}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul>
                          {item.children.map((child: MenuItem) => (
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
      <div className="flex items-center space-x-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DialogTrigger>
          <MobileMenu />
        </Dialog>
        <ThemeProvider defaultTheme="dark">
          <ModeToggle />
        </ThemeProvider>
      </div>
    </div>
  );
};

export { Navbar };
