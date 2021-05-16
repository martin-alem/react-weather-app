import React from 'react';
import "./WeatherManager.css";
import "./background-image.jpg";
import { getWeatherDataOnPageLoad } from "./utils";
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

        this.state = {
            doneFetching: false,
            weatherData: {}
        }
    }

    componentDidMount() {
        getWeatherDataOnPageLoad().then(response => {
            this.setState({ doneFetching: true, weatherData: response });
        }).catch(error => {
            this.setState({ doneFetching: true });
            //show error message
            console.error("Error loading weather data" + error);
        });
    }

    render() {
        console.log(this.state.weatherData);
        //build location toString
        const location = `${this.state.weatherData.city ? this.state.weatherData.city : "No City"}, ${this.state.weatherData.country ? this.state.weatherData.country : "No Country"}`

        //build image start_url
        const imageUrl = `https://openweathermap.org/img/wn/${this.state.weatherData.icon ? this.state.weatherData.icon : "01d"}@2x.png`;

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
                        <div className=
                            {
                                this.state.doneFetching ? "temperature" : "temperature animate"
                            }>
                            <Temperature
                                temperatureValue={this.state.weatherData.temperature}
                                location={location}
                            />
                        </div>
                        <div className=
                            {
                                this.state.doneFetching ? "weather-image" : "weather-image animate"
                            }>
                            <WeatherImage imageSrc={imageUrl} description={this.state.weatherData.description} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WeatherManager;