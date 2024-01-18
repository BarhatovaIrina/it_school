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
import FormWord from './components/FormWord/FormWord';
import { observer, inject } from 'mobx-react';

const App = inject('store')(observer(({ store }) => {

  return (
    <Router>
      <div className="App">
        <Header />

        <main className='main'>
          <Routes>
            <Route path="/table" element={<TableWords />}></Route>
            <Route path="/game" element={<CardWord />}> </Route>
            <Route path="/add" element={<FormWord />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}))

export default App;
