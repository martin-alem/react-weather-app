import React from 'react';
import "./WeatherData.css";

class WeatherData extends React.Component {

    static defaultProps = {
        icon: "Temperature",
        data: "0"
    }

    render() {
        return (
            <React.Fragment>
                <div className="WeatherData">
                    <i className="fa">{this.props.icon}</i>
                    <span className="Data">{this.props.data}</span>
                </div>
            </React.Fragment>
        )
    }
}

export default WeatherData;