import React from 'react';

export const Themes =  {
    main: {
        background: '#962D38',
        foreground: '#EAB547',
        text: '#000000'
    },

    purple: {
        background: '#000000',
        foreground: '#490092',
        text: '#FFFFFF'
    },

    orange: {
        background: '#006ddb',
        foreground: '#db6d00',
        text:'#FFFFFF'
    } 
}

const ThemeContext = React.createContext(Themes);
export default ThemeContext;