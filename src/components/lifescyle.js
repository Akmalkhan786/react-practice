import React, {PureComponent} from 'react';

class Life extends PureComponent {
    state = {
        title: 'Life Cycle'
    }
    // componentDidMount(){
    //     console.log('2 did mount')
    // }
    // componentWillMount(){
    //     console.log('1 will mount')
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //     if (nextState.title === this.state.title) {
    //        return false
    //     }
    //     return true;
    // }
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