import React, { Component } from 'react';

import './App.css';
import billu from './assets/images/billu.jpg';
import tillu from './assets/images/tillu.jpg';
import gullu from './assets/images/gullu.jpg';
import Navbar from './components/Navbar';
import Routes from './Routes';

class App extends Component {
    static defaultProps = {
        cats: [
            {
                name: 'Billu',
                age: 5,
                src: billu,
                facts: [
                    'Billu loves eating popcorn.',
                    'Billu is a naughty cat.',
                    'Billu wants to cuddle with you!',
                ],
            },
            {
                name: 'Tillu',
                age: 3,
                src: tillu,
                facts: [
                    'Tillu has soooo much energy!',
                    'Tillu is highly intelligent.',
                    'Tillu loves people more than other cats.',
                ],
            },
            {
                name: 'Gullu',
                age: 4,
                src: gullu,
                facts: [
                    "Gullu is not the brightest, he's super lazy.",
                    'Gullu does not like walks or exercise.',
                    'Gullu loves eating food.',
                ],
            },
        ],
    };

    render() {
        return (
            <div className="App">
                <Navbar cats={this.props.cats} />
                <div className="container">
                    <Routes cats={this.props.cats} />
                </div>
            </div>
        );
    }
}

export default App;
