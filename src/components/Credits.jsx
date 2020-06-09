import React, { Component } from 'react';

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const creditsAmt1 = this.props.credits1;
        const creditsAmt2 = this.props.credits2;

        return (  
            <div>
                <div>
                    API Key 1: {''} {creditsAmt1} {''} Credits Remaining
                </div>
                <div>
                    API Key 2: {''} {creditsAmt2} {''} Credits Remaining
                </div>
            </div>
        );
    }
}
 
export default Credits;