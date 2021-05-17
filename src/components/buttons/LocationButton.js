import React from 'react';
import "./Button.css";


class LocationButton extends React.Component {
    constructor(props) {
        super(props);
        this.handlefetchDataForCurrentLocation = this.handlefetchDataForCurrentLocation.bind(this);
    }

    handlefetchDataForCurrentLocation() {
        this.props.currentLocationData();
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handlefetchDataForCurrentLocation} className="Button Button-round"><i className="fas fa-location-arrow"></i></button>
            </React.Fragment>
        );
    }
}

export default LocationButton;