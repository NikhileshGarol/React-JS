import logo from './logo.svg';
import HomePage from './pages/HomePage';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Wrap the entire app in the providers for global state */}
      <Header />
         {/* Main content of the app, e.g., product list */}
        <HomePage />
      <Footer />
    </>
  );
}

export default App;
