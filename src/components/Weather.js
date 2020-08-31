import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAPIResponse } from '../actions/fetch_api_data';
import '../styles/weather.css';

class Weather extends Component {
    //INITIAL STATE
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    componentWillMount = () => {
        this.props.FetchAPIResponse("Paris");
    }

    search = () => {
        this.props.FetchAPIResponse(this.state.value);
    }
    // EVENT 
    changeHandler = (e) => {
        const value = e.target.value;
        this.setState({
            value: value
        });

    }

    render() {
        return (
            <div className="container">
                <h1>Weather App </h1>
                <div className="form">

                    <input name="city" placeholder="Paris" onChange={this.changeHandler} />
                    <button onClick={this.search}> <i className="fas fa-search"></i> </button>
                </div>
                <div className="dashboard">

                    <h2><i className="fas fa-chart-bar"></i> Dashboard </h2>
                    <h2><i className="far fa-compass"></i> Location</h2>
                    <div className="data-container">
                        <div className="square">
                            <p>City</p>
                            <p className="data">{this.props.apiLocation[0]}</p>
                        </div>
                        <div className="square">
                            <p>Country</p>
                            <p className="data">{this.props.apiLocation[2]}</p>
                        </div>
                        <div className="square">
                            <p>Time Zone Id</p>
                            <p className="data">{this.props.apiLocation[5]}</p>
                        </div>
                        <div className="square">
                            <p>Local Time</p>
                            <p className="data">{this.props.apiLocation[6]}</p>
                        </div>
                    </div>

                    <h2><i className="fas fa-tint"></i> Current Conditions</h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Condition</p>
                            <p className="data">{this.props.apiConditions[4]}</p>
                        </div>
                        <div className="square">
                            <img src={this.props.apiConditions[0]} alt="current weather condition icon" />
                        </div>

                    </div>


                    <h2><i className="fas fa-thermometer-quarter"></i> Other Conditions </h2>
                    <div className="data-container">

                        <div className="square">
                            <p>Clouds</p>
                            <p className="data">{this.props.apiResponse[11]} %</p>

                        </div>
                        <div className="square">
                            <p>Feels like (Celcius)</p>
                            <p className="data">{this.props.apiResponse[1]} °C</p>
                        </div>
                        <div className="square">
                            <p>Feels like (Fahrenheit)</p>
                            <p className="data">{this.props.apiResponse[10]} °F</p>
                        </div>
                        <div className="square">
                            <p>Humidity</p>
                            <p className="data">{this.props.apiResponse[10]} %</p>
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
        apiLocation: state.FetchWeatherLocation.location,
        apiConditions: state.FetchCurrentConditions.conditions
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ FetchAPIResponse: fetchAPIResponse }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Weather);


