import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './components/Home'
import { Contact } from './components/Contact';

function App() {
  return (
    <BrowserRouter>
        <Header/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
            </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
