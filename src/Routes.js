import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CatList from './components/CatList';
import Cat from './components/Cat';

class Routes extends Component {
    render() {
        const getcat = (props) => {
            let name = props.match.params.name;
            let currentcat = this.props.cats.find(
                (cat) => cat.name.toLowerCase() === name.toLowerCase()
            );
            return <Cat {...props} cat={currentcat} />;
        };
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <CatList cats={this.props.cats} />}
                />
                <Route exact path="/cats/:name" render={getcat} />
                <Redirect to="/" />
            </Switch>
        );
    }
}
export default Routes;
