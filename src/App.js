import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './pages/Search';
import MyList from './pages/MyList';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route exact path='/Mylist' component={MyList} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
