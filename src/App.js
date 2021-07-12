import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import SingleMovie from './pages/SingleMovie/Single';
import MyList from './pages/MyList/MyList';
function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route exact path='/mylist' component={MyList} />
                    <Route exact path='/movie/:id' component={SingleMovie} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
