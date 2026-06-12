import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { Button } from "@/components/base";
import { useTheme } from "@/hooks/useTheme";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      aria-label="Toggle theme"
      variant="secondary"
      onClick={() => toggleTheme()}
      className="w-fit"
    >
      {theme === "dark" ? <FiSun /> : <FaRegMoon />}
    </Button>
  );
};

export default ThemeButton;
