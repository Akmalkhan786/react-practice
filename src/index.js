import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'

// Components
import Post from './components/posts';
import Profile from './components/profile';
import Home from './components/home';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Home}/>
                <Route path='/posts' component={Post}/>
                <Route path='/profile' component={Profile}/>
            </div>
        <BrowserRouter/>
    )
}
        ReactDom.render(<App/>, document.querySelector('#root'))
