import React from 'react';
import "./Button.css";


class DefaultButton extends React.Component {
    constructor(props) {
        super(props);
        this.handlePersistLocation = this.handlePersistLocation.bind(this);
    }

    handlePersistLocation() {
        this.props.persistLocation();
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handlePersistLocation} className="Button Button-round"><i className="fas fa-thumbtack"></i></button>
            </React.Fragment>
        );
    }
}

export default DefaultButton;