import React, { Component } from 'react';
// REDUX
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// API
import { fetchWeatherByCity } from '../Redux/actions/WeatherActions';
// CSS
import '../ressources/styles/weather.css';

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }
    };

    componentWillMount = () => {
        this.props.fetchWeatherByCity('Tunisia')
    };

    search = () => {
        this.props.fetchWeatherByCity(this.state.value)
    };

    changeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            value: value
        })
    };

    render() {
        return (
            <div className='container'>
                <h1>Weather App </h1>
                <div className='form'>
                    <input name='city' placeholder='Belgium' onChange={this.changeHandler} />
                    <button onClick={this.search}> <i className='fas fa-search'></i> </button>
                </div>
                <div className='dashboard'>
                    <h3><i className='fas fa-chart-bar'></i> Dashboard </h3>
                    <h2><i className='far fa-compass'></i> Location</h2>
                    <div className='data-container'>
                        <div className='square'>
                            <p>City</p>
                            <p className='data'>{this.props.apiLocation.name}</p>
                        </div>
                        <div className='square'>
                            <p>Country</p>
                            <p className='data'>{this.props.apiLocation.country}</p>
                        </div>
                        <div className='square'>
                            <p>Time Zone Id</p>
                            <p className='data'>{this.props.apiLocation.timezone_id}</p>
                        </div>
                        <div className='square'>
                            <p>Local Time</p>
                            <p className='data'>{this.props.apiLocation.localtime}</p>
                        </div>
                    </div>
                    <h2><i className='fas fa-tint'></i> Current Conditions</h2>
                    <div className='data-container'>
                        <div className='square'>
                            <p>Condition</p>
                            <p className='data'>{this.props.apiResponse.weather_descriptions}</p>
                        </div>
                        <div className='square'>
                            <img src={this.props.apiResponse.weather_icons} alt='current weather condition icon' />
                        </div>
                      </div>
                    <h2><i className='fas fa-thermometer-quarter'></i> Other Conditions </h2>
                    <div className='data-container'>
                        <div className='square'>
                            <p>Clouds</p>
                            <p className='data'>{this.props.apiResponse.cloudcover} %</p>
                        </div>
                        <div className='square'>
                            <p>Feels like (Celcius)</p>
                            <p className='data'>{this.props.apiResponse.temperature} °C</p>
                        </div>
                        <div className='square'>
                            <p>Feels like (Fahrenheit)</p>
                            <p className='data'>{this.props.apiResponse.feelslike} °F</p>
                        </div>
                        <div className='square'>
                            <p>Humidity</p>
                            <p className='data'>{this.props.apiResponse.humidity} %</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //state.ReducerName.reducerProperty
    return {
        apiResponse: state.FetchWeatherReducer.weatherData,
        apiLocation: state.FetchWeatherLocation.location
    }
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeatherByCity: fetchWeatherByCity }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(Weather);


