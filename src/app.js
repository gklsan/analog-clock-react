import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Clock from 'react-clock';
import DateTime from 'date-time';
import AnalogClock from 'r-analog-clock';

class AnalogOne extends Component{
    render(){
        return (
            <div>
                <AnalogClock />
            </div>
        )
    }
}

class AnalogTwo extends React.Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    render() {
        return (
            <div>
                <p>Current time:</p>
                <Clock
                    value={this.state.date}
                />
            </div>
        );
    }
}

const template = <div>
    <AnalogOne />
        <AnalogTwo />
</div>


ReactDOM.render(template, document.getElementById('app'));

// ReactDOM.render(<MyApp />, document.getElementById('app'));

