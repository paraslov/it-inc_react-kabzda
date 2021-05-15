import React, {useState} from 'react';
import './App.css';
import {Accordion, ItemsType} from './Components/Accordion/Accordion';
import {Rating, RatingValuesType} from './Components/Rating/Rating';
import {UncontrolledOnOff} from './Components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './Components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './Components/Rating/UncontrolledRating';
import {OnOff} from './Components/OnOff/OnOff';
import {OptionType, Select} from './Components/Select/Select';
import {log} from 'util';
import {Clock} from './Components/Clock/Clock';

function App() {

    //* Accordion data and functions ===============================================================>>
    const accordionItems: Array<ItemsType> = [
        {title: 'Yuri', value: 1},
        {title: 'Boris', value: 2},
        {title: 'Sergio', value: 3},
        {title: 'Alena', value: 4},
    ]
    const [collapsed, setCollapsed] = useState(false)
    const [ratingValue, setRatingValue] = useState<RatingValuesType>(0)
    const [on, setOn] = useState(false)
    const onItemClick = (value: any) => console.log(`Acc. item number ${value} send it's value!`)

    //* Select data and functions =================================================================>>
    const options: OptionType[] = [
        {title: 'JavaScript', value: 1},
        {title: 'Java', value: 2},
        {title: 'Python', value: 3},
        {title: 'C#', value: 4},
        {title: 'C++', value: 5},
    ]
    const [currentChoice, setCurrentChoice] = useState<OptionType>({title: 'specialization', value: 'none'})
    const onChoiceChange = (option: OptionType) => {
        console.log(`title is ${option.title} and value id ${option.value}`)
        setCurrentChoice(option)
    }

    return (
        <div className="appWrapper">
            <Clock clockType={'digital'}/>
            <Select title={currentChoice} options={options} onChoiceChange={onChoiceChange}/>
            <Accordion title={'Menu'}
                       collapsed={collapsed}
                       collapseMenu={() => setCollapsed(!collapsed)}
                       items={accordionItems}
                       onItemClick={onItemClick}/>
            {/*<UncontrolledAccordion title={'Settings(uncontrolled)'}/>*/}
            <div>
                <Rating ratingTitle={'Scary Movie'}
                        ratingValue={ratingValue}
                        setRating={setRatingValue}/>
                <UncontrolledRating ratingTitle={'Alien(uncontrolled)'} onChange={() => {
                }}/>
            </div>
            <UncontrolledOnOff onChange={setOn}/>{`${on}`}
            <OnOff on={on} setOn={setOn}/>
        </div>
    );
}

export default App;
