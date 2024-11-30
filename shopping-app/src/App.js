import logo from './logo.svg';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
