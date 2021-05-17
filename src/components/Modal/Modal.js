import React from 'react';
import "./Modal.css";
import Card from "../Card/Card";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [{ "location": "Buea", "date": "2015-3-9" }, { "location": "Buea", "date": "2015-3-9" },],
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="Modal">
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
                <div className="Modal-overlay"></div>
            </React.Fragment>
        )
    }
}

export default Modal