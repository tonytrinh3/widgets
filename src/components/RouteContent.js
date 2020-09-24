import {useEffect, useState} from 'react';


const RouteContent = ({path,children}) =>{
    const [currentPath, setCurrentPath] = useState(window.location.pathname);




    //the reason this is in here is bc we want to change content in Route
    useEffect( ()=>{
        const onLocationChange = () =>{
            console.log('Inside Route')
            console.log('Location Change') //this will show 4 times when you click it
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate',onLocationChange);

        return () =>{
            window.removeEventListener('popstate', onLocationChange);
        };

    }, []);

    return currentPath === path ? children : null;
};

export default RouteContent;