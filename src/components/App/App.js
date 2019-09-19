import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style.css';
import ErrorBoundary from "../Error-boundary/Error-boundary";
import NavbarRegions from "../Navbar/Navbar";
import Footbar from "../Footbar/Footbar";
import Error404 from "../Error-404/Error-404";
import HomePage from "../HomePage/HomePage";
import RegionPage from "../Region-page/Region-page"
import C from "../../constants";


const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <main className="bg-light d-flex flex-column justify-content-between">
                    <NavbarRegions/>
                    <section className="flex-grow-1">
                        <Switch>
                            <Route path="/"
                                   component={HomePage}
                                   exact/>
                            <Route path="/bySubregion/:region?" render={({match}) => {
                                const {region} = match.params;
                                return <RegionPage
                                    region={region}
                                    filter={C.FILTER_BY_SUBREGIONS}/>
                            }}/>
                            <Route path="/byLanguage/:region?" render={({match}) => {
                                const {region} = match.params;
                                return <RegionPage
                                    region={region}
                                    filter={C.FILTER_BY_LANGUAGES}/>
                            }}/>
                            <Route component={Error404}/>
                        </Switch>
                    </section>
                    <Footbar/>
                </main>
            </Router>
        </ErrorBoundary>
    );
};

export default App;