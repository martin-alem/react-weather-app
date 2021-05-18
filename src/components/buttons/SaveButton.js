import React from 'react';
import "./Button.css";


class LocationButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleSaveCurrentLocation = this.handleSaveCurrentLocation.bind(this);
    }

    handleSaveCurrentLocation() {
        this.props.saveLocation();
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleSaveCurrentLocation} className="Button Button-round"><i className="fas fa-save"></i></button>
            </React.Fragment>
        );
    }
}

export default LocationButton;