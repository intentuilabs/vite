import { IconMoon, IconSun } from "justd-icons";
import { Button } from "~/components/ui";
import { useTheme } from "./theme-provider";

interface Props {
  appearance?: "plain" | "outline";
}

export function ThemeSwitcher({ appearance = "plain" }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      appearance={appearance}
      size="square-petite"
      aria-label={`Switch to ${theme}` === "light" ? "dark" : "light" + "mode"}
      onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IconSun className="transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 h-[1.2rem] w-[1.2rem]" />
      <IconMoon className="absolute transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
