import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { AppProvider } from './context/AppContext';
import './styles/App.css';

const App = () => {
    return (
        <AppProvider>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Router>
        </AppProvider>
    );
};

export default App;
