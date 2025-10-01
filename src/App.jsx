import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* The page content will go here */}
        <HomePage/>
      </main>
      <Footer />
    </>
  );
}

export default App;