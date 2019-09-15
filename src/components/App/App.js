import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './style.css';
import RestCountriesService from '../../services/Rest-сountries-service';
import {RestCountriesServiceProvider} from '../Rest-countries-service-context/Rest-сountries-service-context';
import ErrorBoundary from "../Error-boundary/Error-boundary";
import NavbarRegions from "../Navbar/Navbar";
import Footbar from "../Footbar/Footbar";
import Error404 from "../Error-404/Error-404";
import HomePage from "../HomePage/HomePage";


export default class App extends Component {

    state = {
    };

    restCountriesService = new RestCountriesService();


    render() {
        return (
            <ErrorBoundary>
                <RestCountriesServiceProvider value={this.restCountriesService}>
                    <Router>
                        <main className="bg-light d-flex flex-column justify-content-between">
                            <NavbarRegions/>
                            <section className="flex-grow-1">
                                <Switch>
                                    <Route path="/"
                                           component={HomePage}
                                           exact />
                                    <Route component={Error404}/>
                                </Switch>
                            </section>
                            <Footbar/>
                        </main>
                    </Router>
                </RestCountriesServiceProvider>
            </ErrorBoundary>
        );
    }
}