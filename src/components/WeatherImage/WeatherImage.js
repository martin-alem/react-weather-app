import React from 'react';
import "./WeatherImage.css"

class WeatherImage extends React.Component {

    static defaultProps = {
        imageSrc: "./default-weather.png",
        description: "No Weather Data"
    }

    render() {
        return (
            <React.Fragment>
                <div className="WeatherImage">
                    <img className="WeatherImage-image" src={this.props.imageSrc} alt="Weather" />
                    <p className="Weather-description">{this.props.description}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default WeatherImage;