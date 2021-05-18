import React from 'react';
import "./Card.css";

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.handleLoadData = this.handleLoadData.bind(this);
    }

    handleLoadData(event) {
        const cityName = event.target.getAttribute('data').toLowerCase();
        this.props.getWeatherData(cityName);
        this.props.closeModal();
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
                    <p className="actions">
                        <i className="far fa-trash-alt"></i>
                        <i onClick={this.handleLoadData} data={this.props.location} className="fas fa-search-location"></i>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Card