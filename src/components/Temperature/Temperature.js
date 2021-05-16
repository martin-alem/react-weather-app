import React from 'react';
import "./Temperature.css";

class Temperature extends React.Component {
    static defaultProps = {
        temperature: 0,
        location: "No location"
    }
    render() {
        return (
            <React.Fragment>
                <div className="Temperature">
                    <h1 className="Temperature-value">{this.props.temperature} <span className="Temperature-unit">c</span></h1>
                    <h2 className="Temperature-location">{this.props.location}</h2>
                </div>
            </React.Fragment>
        );
    }
}

export default Temperature;