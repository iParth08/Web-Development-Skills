import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//initial State

const initialState = {

    //History of Transactions
    transactions: [
    { id: 1, text: 'Flower', amount: -20 }
    ],


}

// Create Global context
export const GlobalContext = createContext(initialState);

// Provider Component (Parent ---> Children)
export const GlobalProvider = ({children}) => {
    //State Manager, Reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}

        </GlobalContext.Provider>
    );
}