import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import { useTheme } from "@/components/ui/shadcn/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* 根据当前主题来显示不同的图标 */}
      <Moon className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all ${theme === "dark" ? "hidden" : ""}`} />
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "" : "hidden"}`} />
      <span className="sr-only">切换主题</span>
    </Button>
  );
}
