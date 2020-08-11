// general imports
import { ThemeProvider } from 'styled-components';
// components
import { Header } from '@mainComponents';
import { theme, useDarkMode, ErrorGlobal } from '@styles';
const { lightTheme, darkTheme } = theme;

export default function Custom404() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ErrorGlobal />
      <Header title={"Anika Rede: Software Engineer"} />
      <h1>404 - Page Not Found</h1>
    </ThemeProvider>
  )
}
