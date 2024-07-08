import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes.js';

const App = () => {
    return (
        <Router>
            <div>
                <Routes />
            </div>
        </Router>
    );
}

export default App;
