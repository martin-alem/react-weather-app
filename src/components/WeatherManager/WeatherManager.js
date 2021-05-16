import React from 'react';
import "./WeatherManager.css";
import "./background-image.jpg";
import SearchForm from '../forms/SearchForm';
import DefaultButton from '../buttons/DefaultButton';
import LocationButton from '../buttons/LocationButton';
import BookMarkButton from '../buttons/BookMarkButton';
import SaveButton from '../buttons/SaveButton';
import WeatherImage from "../WeatherImage/WeatherImage";
import Temperature from "../Temperature/Temperature";

class WeatherManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="WeatherManager">
                    <div className="WeatherManager-controls">
                        <div className="search-form">
                            <SearchForm />
                        </div>
                        <div className="default-btn">
                            <DefaultButton className="default-btn" />
                        </div>

                        <div className="location-btn">
                            <LocationButton className="location-btn" />
                        </div>

                        <div className="bookmark-btn">
                            <BookMarkButton />
                        </div>

                        <div className="save-btn">
                            <SaveButton />
                        </div>

                    </div>
                    <div className="WeatherManager-info">
                        <div className="temperature">
                            <Temperature />
                        </div>
                        <div className="weather-image">
                            <WeatherImage />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WeatherManager;