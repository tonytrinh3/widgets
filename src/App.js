import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

export default () =>{
    const [selected, setSelected] = useState(options[0]);
    //the reason we want the state in the app in case we have multiple Dropdown components we are going to use




    return (
        <div className="">
            {/* <Accordion items = {items}/> */}

            <Dropdown 
            selected = {selected}
            onSelectedChange = {setSelected}
            options = {options}
            />
        </div>
    )
};