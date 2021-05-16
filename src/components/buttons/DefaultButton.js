import React from 'react';
import "./Button.css";


class DefaultButton extends React.Component {

    render() {
        return (
            <React.Fragment>
                <button className="Button Button-round"><i class="fas fa-thumbtack"></i></button>
            </React.Fragment>
        );
    }
}

export default DefaultButton;