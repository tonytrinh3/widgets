import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language,text}) =>{
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() =>{ 
        //this is just to put a lag on typing and
        //sending text to api request
        const timerId = setTimeout(()=>{
            setDebouncedText(text);
        },500);

        return () =>{
            clearTimeout(timerId);
        };


    },[text])





    useEffect(()=>{
        console.log('New language or text');

        const doTranslation = async () =>{

            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
                    }
                }
            );

            setTranslated(data.data.translations[0].translatedText)

        }

        doTranslation();
   
    }, [language,debouncedText])


    console.log("body"); //this renders first then useEffect renders 2nd

    return (
        <div className="">
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert;