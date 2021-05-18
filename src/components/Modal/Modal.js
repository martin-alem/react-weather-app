import React from 'react';
import "./Modal.css";
import Card from "../Card/Card";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [{ "location": "Buea", "date": "2015-3-9" }, { "location": "Buea", "date": "2015-3-9" },],
        }

        this.handleCloseModal = this.handleCloseModal.bind(this);
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
                        this.state.locations.map((location, index) => {
                            return (
                                <Card
                                    key={index}
                                    location={location.location} date={location.date}
                                />
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