import React, { Component } from 'react';
import _ from 'lodash';

class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let creditsAmt1 = _.toNumber(this.props.credits1);
        let creditsAmt2 = _.toNumber(this.props.credits2);
        let creditsAmt3 = creditsAmt1 + creditsAmt2

        return (  
            <div>
                
                <div>
                    {creditsAmt3} {''} Credits Remaining
                    
                </div>

            </div>
        );
    }
}
 
export default Credits;