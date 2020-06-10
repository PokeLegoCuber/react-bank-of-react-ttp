import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
    
class Home extends Component {
    render() {
    return (
        <div>
            <img src="https://m.economictimes.com/thumb/msid-71487585,width-1200,height-900,resizemode-4,imgsize-169788/bank-getty.jpg" alt="bank"/>
            <h1>Bank of React</h1>

            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
    }
}

export default Home;