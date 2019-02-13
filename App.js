import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            click: this.state.click + 1
        }
        
    }
    
    updateClickCount(){
        this.setState({
            click: this.state.click + 1
        })
    }

    reset(){

        this.setState({
            click: 0
        })

    }

    render() {
        return (
            <div>
                <H1 />
                <H2 clickCount={this.state.click} onReset={this.reset.bind(this)} />

                <H3 onClickProp={this.updteClickCount.bind(this)} />
            </div>
        );
    }
}


App.propTypes = {
    
};

export default App
