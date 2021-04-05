import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Components/Accordion/Accordion';
import {Rating, RatingValuesType} from './Components/Rating/Rating';
import {UncontrolledOnOff} from './Components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './Components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './Components/Rating/UncontrolledRating';
import {OnOff} from './Components/OnOff/OnOff';

function App() {
    const [collapsed, setCollapsed] = useState(false)
    const [ratingValue, setRatingValue] = useState<RatingValuesType>(0)
    const [on, setOn] = useState(false)
    return (
        <div className="appWrapper">
            <Accordion title={'Menu'}
                       collapsed={collapsed}
                       collapseMenu={() => setCollapsed(!collapsed)}/>
            <UncontrolledAccordion title={'Settings(uncontrolled)'} />
            <div>
                <Rating ratingTitle={'Scary Movie'}
                        ratingValue={ratingValue}
                        setRating={setRatingValue}/>
                <UncontrolledRating ratingTitle={'Alien(uncontrolled)'} />
            </div>
            <UncontrolledOnOff onChange={setOn}/>{`${on}`}
            <OnOff on={on} setOn={setOn}/>
        </div>
    );
}

export default App;
