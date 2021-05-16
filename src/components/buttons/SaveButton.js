import React from 'react';
import "./Button.css";


class LocationButton extends React.Component {

    render() {
        return (
            <React.Fragment>
                <button className="Button Button-round"><i className="fas fa-save"></i></button>
            </React.Fragment>
        );
    }
}

export default LocationButton;