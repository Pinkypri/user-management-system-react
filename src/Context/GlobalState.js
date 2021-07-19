import React ,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer"

const initialstate = {
    users:[],
}

export const GlobalContext=createContext(initialstate);

export const GlobalProvider = (props) => {
    const[state,dispatch]=useReducer(AppReducer,initialstate);

    const adduser=(user)=>{
        dispatch({
            type:"ADD_USER",
            payload:user,
        });
    };
    const deleteuser=(id)=>{
        dispatch({
            type:"DELETE_USER",
            userId:id,
        });
    };

return(
    <GlobalContext.Provider value={{
        users:state.users,
        adduser,
        deleteuser,
    }}
    >
    {props.children}
    </GlobalContext.Provider>
    );
   
};
