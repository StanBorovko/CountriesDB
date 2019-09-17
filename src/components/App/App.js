import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style.css';
import ErrorBoundary from "../Error-boundary/Error-boundary";
import NavbarRegions from "../Navbar/Navbar";
import Footbar from "../Footbar/Footbar";
import Error404 from "../Error-404/Error-404";
import HomePage from "../HomePage/HomePage";
import SubregionPage from "../Subregion-page/Subregion-page";


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
                            <Route path="/bySubregion/:region?" component={SubregionPage}/>
                            <Route path="/byLanguage/:region?" render={({match}) => {
                                const {region} = match.params;
                                return <SubregionPage region={region}/>
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