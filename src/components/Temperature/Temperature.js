import React from 'react';
import "./Temperature.css";

class Temperature extends React.Component {
    static defaultProps = {
        temperature: 0
    }
    render() {
        return (
            <React.Fragment>
                <div className="Temperature">
                    <h1 className="Temperature-value">{this.props.temperature} <span className="Temperature-unit">c</span></h1>
                </div>
            </React.Fragment>
        );
    }
}

export default Temperature;