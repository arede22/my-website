import styled, { ThemeProvider } from 'styled-components';
// components
import { Header } from '@mainComponents';
import { theme, useDarkMode, ErrorGlobal } from '@styles';
const { lightTheme, darkTheme } = theme;

function Error({ statusCode }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ErrorGlobal />
      <Header title={"Anika Rede: Software Engineer"} theme={themeMode} />
      <h1>Error!</h1>
      <p>
        {statusCode
          ? `A ${statusCode} error occurred on server. Please try again later!`
          : 'An error occurred on client'}
      </p>
    </ThemeProvider>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
