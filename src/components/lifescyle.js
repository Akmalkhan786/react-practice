import React, {Component} from 'react';

class Life extends Component {
    state = {
        title: 'Life Cycle'
    }
    componentDidMount(){
        console.log('2 did mount')
    }
    componentWillMount(){
        console.log('1 will mount')
    }
    render() {
        console.log('Render')
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    ()=>this.setState({
                        title: 'something else'
                    })}>
                    Click to change</div>
            </div>
        )
    }
}

export default Life;