import React from 'react';

const Link = ({className, href, children}) =>{
    const onClick = (event)=>{
        if(event.metaKey || event.ctrlKey){
            return;
        }



        event.preventDefault(); // prevent page from reloading
        window.history.pushState({},"",href);


        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        //all you need to understand is that this is going to communicate over to those
        //route components that the url has just changed

    };


    return (
        <a onClick = {onClick} href={href} className={className}>
            {children}
        </a>
    )
};

export default Link;