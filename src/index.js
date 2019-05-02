import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

// Components
import Header from './components/header'
import NewsList from './components/new_list'

class App extends Component {
    state = {
        news: JSON
    }
    render() {
        return (
            <div>
                <Header />
                <NewsList news={this.state.news} new="new" />
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));