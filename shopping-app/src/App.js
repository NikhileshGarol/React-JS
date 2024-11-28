import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Container } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Wrap the entire app in the providers for global state */}
      <Header />
      <Container>
        {/* Main content of the app, e.g., product list */}
        <HomePage />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
