import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'

// Components
import Post from './components/posts';
import Profile from './components/profile';
import Home from './components/home';
import PostItem from './components/post_item';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <NavLink to='/'>Home</NavLink><br/>
                    <NavLink
                     to='/posts'
                     activeStyle={{color:'green'}}
                     activeClassName='selectedx'
                     >Posts</NavLink><br/>
                    <NavLink to='/profile'>Profile</NavLink><br/>
                    <hr/>
                </header>
                <Switch>
                    <Route path='/post/:id/:uname' component={PostItem}></Route>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/posts' exact component={Post}/>
                    <Route path='/' exact component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))
