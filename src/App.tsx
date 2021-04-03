import React from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {Rating} from './Components/Rating/Rating';
import {OnOff} from './Components/OnOff/OnOff';

function App() {
    return (
        <div className="appWrapper">
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <div>
                <Rating ratingTitle={'Scary Movie'} ratingValue={4}/>
                <Rating ratingTitle={'Terminator'} ratingValue={5}/>
                <Rating ratingTitle={'Sex and the city'} ratingValue={3}/>
            </div>
            <OnOff />
        </div>
    );
}

export default App;
