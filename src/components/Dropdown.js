import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({label, options, selected, onSelectedChange}) =>{
    const [open,setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=>{//this useEffect is used to click outside of the dropdown to close the dropdown
        //console.log('ON'); //[] MEAN LOADS WHEN COMPONENT LOADS

        const onBodyClick = (event)=>{ //event object comes along with every event listener
            // console.log(event.target);

            if (ref.current.contains(event.target)){
              return; //auto exits
              
            } //you need this in order to have the drop down menu close after you click it
            //the reason the drop down menu cannot close is bc document.body is priority 
            //over the onclick of the item and the dropdown

            //else setOpen to false to close the dropdown when body is touched
            setOpen(false);
        };

        document.body.addEventListener('click',onBodyClick );

        return () =>{
            console.log("useEffect cleanup return thing to clean up")
            document.body.removeEventListener('click',onBodyClick);
        }

    },[]);


    const renderedOptions = options.map(option =>{
        if (option.value === selected.value){
            return null
        };

        return(
            <div 
                key = {option.value} 
                className="item"
                onClick = {()=>onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    //console.log(ref.current);

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick = {()=>setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ""}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;