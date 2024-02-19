import '../node_modules/bootstrap/package.json';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';
import { Review } from './components/Review';

function App() {
  return (
    <>
      <Header />
      <div className="main-content-div">
        <div className="main-content-inner-div">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
