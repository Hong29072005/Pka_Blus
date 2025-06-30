// src/context/ChangeContext.js

import { createContext, useState } from 'react';

// បង្កើត context object
export const ChangeContext = createContext();

// Provider ដែលគ្រប់គ្រង state change
export const ChangeProvider = ({ children }) => {
    const [change, setChange] = useState(false); // state របស់អ្នក

    return (
        <ChangeContext.Provider value={{ change, setChange }}>
            {children}
        </ChangeContext.Provider>
    );
};
