import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import SingleMovie from './pages/SingleMovie/Single';
import MyList from './pages/MyList';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route exact path='/:id' component={SingleMovie} />
                    <Route exact path='/mylist' component={MyList} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
