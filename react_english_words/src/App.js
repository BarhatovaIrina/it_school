import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TableWords from './components/TableWords/TableWords';
import CardWord from './components/CardWord/CardWord';

function App() {
  return (
    <div className="App">
      <Header />
      <CardWord />
      <TableWords />
      <Footer />
    </div>
  );
}

export default App;
