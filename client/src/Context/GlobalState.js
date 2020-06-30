import React, { createContext, useState } from 'react'

export const GlobalContext = createContext(); 

export const GlobalStateProvider = ( props ) => {

const [ transactions, setTransactions ] = useState([
    { id: 1, text: 'Flower', amount: 20 },
    { id: 2, text: 'Salary', amount: 1000 },
    { id: 3, text: 'Book', amount: -70 }
]);
       
 const addTransaction = (text, amount, id) => {
     setTransactions([...transactions, {text, amount, id} ])
 }
    return (        
        <div>
            <GlobalContext.Provider value={{transactions, addTransaction}}>
                 {props.children}
            </GlobalContext.Provider>
        </div>
    )
}








