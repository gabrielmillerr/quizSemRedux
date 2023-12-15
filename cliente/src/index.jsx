import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from "./styles/global"
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme"
import { QuizGame } from './pages/quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QuizGame />
    </ThemeProvider>
  </React.StrictMode>
);
