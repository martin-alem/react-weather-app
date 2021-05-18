import React from 'react';
import "./Modal.css";
import Card from "../Card/Card";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleCloseModal = this.handleCloseModal.bind(this);

    }

    static defaultProps = {
        locations: []
    }

    handleCloseModal() {
        this.props.closeModal();
    }

    render() {
        return (
            <React.Fragment>
                <div className={!this.props.openModal ? "Modal hidden" : "Modal"}>
                    <h1>Locations</h1>
                    {
                        this.props.locations.map((location, index) => {
                            return (
                                <Card key={index} location={location.location} date={location.date} getWeatherData={this.props.getWeatherData} closeModal={this.handleCloseModal} />
                            );
                        })
                    }
                </div>
                <span className={!this.props.openModal ? "close hidden" : "close"}><i onClick={this.handleCloseModal} className="fas fa-times"></i></span>
                <div className={!this.props.openModal ? "Modal-overlay hidden" : "Modal-overlay"}></div>
            </React.Fragment>
        )
    }
}

export default Modal