import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import Home from './components/Homepage/Home'
import { BrowserRouter as Router, Route
} from 'react-router-dom';

class Contact extends Component {
    render() {
        return <h1>Contact us at contact@example.com</h1>;
    }
}
class App extends Component {
    render() {
        return <Router>
            <>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
            </>
        </Router>;
    }
}
export default App;