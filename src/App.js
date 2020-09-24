import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import RouteContent from './components/RouteContent';
import Header from './components/Header';


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

// const showAccordion = () =>{
//     if (window.location.pathname === '/'){
//         return <Accordion items = {items}/>;
//     }
// };

// const showList = () =>{
//     if (window.location.pathname === '/list'){
//         return <Search />;
//     }
// };

// const showDropdown = () =>{
//     if (window.location.pathname === '/dropdown'){
//         return <Dropdown />;
//     }
// };

// const showTranslate = () =>{
//     if (window.location.pathname === '/translate'){
//         return <Translate />;
//     }
// };


export default () =>{
    const [selected,setSelected] = useState(options[0]);

    return (
        <header className="">
            <Header />
            {/* route is there to rerender the content */}
            <RouteContent path = "/">
                <Accordion items = {items}/>
            </RouteContent>
            <RouteContent path = "/list">
                <Search />
            </RouteContent>
            <RouteContent path = "/dropdown">
                <Dropdown
                    label = "Select a color"
                    options = {options}
                    selected = {selected}
                    onSelectedChange = {setSelected}
                />
            </RouteContent>
            <RouteContent path = "/translate">
                <Translate/>
            </RouteContent>
        </header>
    )
};

//For Dropdown
// export default () =>{
//     const [selected, setSelected] = useState(options[0]);
//     //the reason we want the state in the app in case we have multiple Dropdown components we are going to use
//     const [showDropdown, setShowDropdown] = useState(true);



//     return (
//         <div className="">
//             {/* <Accordion items = {items}/> */}
//             <button onClick = {()=> setShowDropdown(!showDropdown)}className="">
//                 Toggle Dropdown
//             </button>
//             {showDropdown ? 
//                 <Dropdown 
//                 selected = {selected}
//                 onSelectedChange = {setSelected}
//                 options = {options}
//                 />: null
//             }   
//         </div>
//     )
// };