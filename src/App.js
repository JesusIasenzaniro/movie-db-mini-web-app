import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Search from './pages/Search/Search';
import SingleMovie from './pages/SingleMovie/Single';
import MyList from './pages/MyList/MyList';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/' component={Search} />
                        <Route exact path='/mylist' component={MyList} />
                        <Route exact path='/movie/:id' component={SingleMovie} />
                    </Switch>
                </ScrollToTop>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
