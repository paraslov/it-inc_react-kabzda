import React from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {Rating} from './Components/Rating/Rating';
import {OnOff} from './Components/OnOff/OnOff';
import {UncontrolledAccordion} from './Components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './Components/Rating/UncontrolledRating';

function App() {
    return (
        <div className="appWrapper">
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Users'} collapsed={false}/>
            <UncontrolledAccordion title={'Settings(uncontrolled)'} />
            <div>
                <Rating ratingTitle={'Scary Movie'} ratingValue={4}/>
                <Rating ratingTitle={'Terminator'} ratingValue={5}/>
                <Rating ratingTitle={'Sex and the city'} ratingValue={3}/>
                <UncontrolledRating ratingTitle={'Alien(uncontrolled)'} />
            </div>
            <OnOff />
        </div>
    );
}

export default App;
