import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () =>{

    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);


     useEffect(()=>{
        const search = async () =>{
           const {data} =  await axios.get("https://en.wikipedia.org/w/api.php",{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search);

        }; // you get the respone from this function

        if (term && !results.length){
            search();
        } else{
            const timeoutId = setTimeout(()=>{
                if (term){
                    search();
                };
            }, 1000);

            
            return ()=>{
                clearTimeout(timeoutId)//built in JS function to stop timeouts before finishing
            }
        }


    },[term]);

    const renderedResults = results.map((result)=>{
        return(
            <div className="item" key= {result.pageid}>
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML = {{ __html: result.snippet}}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        );
    });

 
 

    return (
        <div className="">
            <div className="ui form">
                <div className="field">
                    <label >Enter Search Term</label>
                    <input 
                    className = "input" 
                    type="text"
                    value = {term}
                    onChange = {event=>setTerm(event.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
};

export default Search;