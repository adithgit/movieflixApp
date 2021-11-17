import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/banner';
import Header from './components/header/header';
import Action from './components/Action/Action';
import Thriller from './components/Thriller/Thriller';
import Drama from './components/Drama/Drama';
import Comedy from './components/Comedy/Comedy';
import Series from './components/Series/Series';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Action/>
       <Thriller/>
       <Comedy/>
       <Drama/>
       <Series/>
       <Footer/>
    </div>
  );
}

export default App;
