import './App.css';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom";

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TableWords from './components/TableWords/TableWords';
import CardWord from './components/CardWord/CardWord';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div className='main'> */}
        <main className='main'>
          <Routes>
            <Route path="/table" element={<TableWords />}></Route>
            <Route path="/game" element={<CardWord />}> </Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>
        {/* </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
