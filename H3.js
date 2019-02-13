import React from 'react';
import PropTypes from 'prop-types';

class H3 extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <H1 />
                <H2 clickCount={this.state.click + 1}/>

                <H3 onClickProp={this.props.clickCount.bind(this)}/>
            </div>
        );
    }
}


H3.propTypes = {
    
};

export default H3
