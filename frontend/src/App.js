import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
  <div className='todoapp'>
    <div className="App">
			<Header />
			<Section />
      <Footer/>
    </div>
  </div>
  );
}

export default App;
