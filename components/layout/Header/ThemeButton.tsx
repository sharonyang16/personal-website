import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { useTheme } from '@/hooks/useTheme';
import { IconButton } from 'unremarkable-ui';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <IconButton
      aria-label="Toggle theme"
      variant="outline"
      icon={theme === 'dark' ? FiSun : FaRegMoon}
      onClick={() => toggleTheme()}
      className="w-fit rounded-lg"
    />
  );
};

export default ThemeButton;
