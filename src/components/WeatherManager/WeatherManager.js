import React from 'react';
import "./WeatherManager.css";
import "./background-image.jpg";
import { getWeatherDataOnPageLoad, getWeatherDataOnSubmit, persistLocation, getWeatherDataForCurrentLocation, saveLocation, retrieveLocations, deleteLocation } from "./utils";
import SearchForm from '../forms/SearchForm';
import DefaultButton from '../buttons/DefaultButton';
import LocationButton from '../buttons/LocationButton';
import BookMarkButton from '../buttons/BookMarkButton';
import SaveButton from '../buttons/SaveButton';
import WeatherImage from "../WeatherImage/WeatherImage";
import Temperature from "../Temperature/Temperature";
import Modal from "../Modal/Modal";
import Message from "../Message/Message";

class WeatherManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            doneFetching: false,
            weatherData: {},
            message: "",
            openModal: false,
            locations: [],
        }
        this.fetchDataOnSubmit = this.fetchDataOnSubmit.bind(this);
        this.fetchWeatherDataForCurrentLocation = this.fetchWeatherDataForCurrentLocation.bind(this);
        this.persistCurrentLocation = this.persistCurrentLocation.bind(this);
        this.saveCurrentLocation = this.saveCurrentLocation.bind(this);
        this.deleteLocation = this.deleteLocation.bind(this);
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        getWeatherDataOnPageLoad().then(response => {
            this.setState({ doneFetching: true, weatherData: response });
        }).catch(error => {
            this.setState({ doneFetching: true });
            //show error message
            console.error("Error loading weather data " + error);
            this.hideShowMessage(4000, "Error loading weather data");
        });
    }

    fetchDataOnSubmit(cityName) {
        getWeatherDataOnSubmit(cityName).then(response => {
            this.setState({ doneFetching: true, weatherData: response });
        }).catch(error => {
            //show error message
            this.setState({ doneFetching: true });
            console.log("Error loading weather data " + error);
            this.hideShowMessage(4000, "Error loading weather data");
        });
    }

    persistCurrentLocation() {
        if (this.state.weatherData.coords) {
            persistLocation([this.state.weatherData.coords.lat, this.state.weatherData.coords.lon]);
            this.hideShowMessage(3000, "Location Set As Default");
        } else {
            this.hideShowMessage(3000, "Error Setting Location As Default");
        }
    }

    fetchWeatherDataForCurrentLocation() {
        getWeatherDataForCurrentLocation().then(response => {
            this.setState({ doneFetching: true, weatherData: response });
        }).catch(error => {
            //show error message
            this.setState({ doneFetching: true });
            console.log("Error loading weather data " + error);
            this.hideShowMessage(4000, "Error loading weather data");
        });
    }

    saveCurrentLocation() {

        if (this.state.weatherData.city) {
            try {
                saveLocation(this.state.weatherData.city);
                this.hideShowMessage(3000, `${this.state.weatherData.city} saved`);
            } catch (error) {
                this.hideShowMessage(3000, error.message);
            }
        } else {
            this.hideShowMessage(3000, "Error Saving Location");
        }
    }

    deleteLocation(city) {
        try {
            const newLocation = deleteLocation(city);
            this.setState({ locations: newLocation });
        } catch (error) {
            this.hideShowMessage(3000, error.message);
        }
    }

    hideShowMessage(duration, message) {
        this.setState({ message: message });
        setTimeout(() => {
            this.setState({ message: "" });
        }, duration)
    }

    showModal() {
        try {
            const retrievedLocations = retrieveLocations();
            this.setState({ locations: retrievedLocations });
            this.setState({ openModal: true });
        } catch (error) {
            this.hideShowMessage(3000, error.message);
        }
    }

    closeModal() {
        this.setState({ openModal: false });
    }

    render() {
        //build location toString
        const location = `${this.state.weatherData.city ? this.state.weatherData.city : "No City"}, ${this.state.weatherData.country ? this.state.weatherData.country : "No Country"}`

        //build image start_url
        const imageUrl = `https://openweathermap.org/img/wn/${this.state.weatherData.icon ? this.state.weatherData.icon : "01d"}@2x.png`;

        return (
            <React.Fragment>
                <Modal openModal={this.state.openModal} closeModal={this.closeModal} locations={this.state.locations} getWeatherData={this.fetchDataOnSubmit} deleteLocation={this.deleteLocation} />
                <div className="WeatherManager">
                    <div className="WeatherManager-controls">
                        <div className="search-form">
                            <SearchForm getWeatherDataOnSubmit={this.fetchDataOnSubmit} />
                        </div>
                        <div className="default-btn">
                            <DefaultButton persistLocation={this.persistCurrentLocation} />
                        </div>

                        <div className="location-btn">
                            <LocationButton currentLocationData={this.fetchWeatherDataForCurrentLocation} />
                        </div>

                        <div className="bookmark-btn">
                            <BookMarkButton showModal={this.showModal} />
                        </div>

                        <div className="save-btn">
                            <SaveButton saveLocation={this.saveCurrentLocation} />
                        </div>

                    </div>
                    <div className={this.state.message ? "Message" : "Message hidden"}>
                        <Message message={this.state.message} />
                    </div>
                    <div className="WeatherManager-info">
                        <div className={this.state.doneFetching ? "temperature" : "temperature animate"}>
                            <Temperature temperatureValue={this.state.weatherData.temperature} location={location} />
                        </div>
                        <div className={this.state.doneFetching ? "weather-image" : "weather-image animate"}>
                            <WeatherImage imageSrc={imageUrl} description={this.state.weatherData.description} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WeatherManager;