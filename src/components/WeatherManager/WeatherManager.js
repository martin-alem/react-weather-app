import React from 'react';
import "./WeatherManager.css";
import "./background-image.jpg";
import SearchForm from '../forms/SearchForm';

class WeatherManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="WeatherManager">
                    <div className="WeatherManager-controls">
                        <SearchForm />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WeatherManager;