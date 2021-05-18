import React from 'react';
import "./Card.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        location: "",
        date: ""
    }

    render() {
        return (
            <React.Fragment>
                <div className="Card">
                    <h2>{this.props.location}</h2>
                    <p>{this.props.date}</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Card