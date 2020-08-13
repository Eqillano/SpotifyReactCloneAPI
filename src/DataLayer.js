import React,{createContext,useContext,useReducer} from 'react';


export const DataLayerContext = createContext(); 

export const DataLayer = ({ initialState,reducer,children }) => (
    <DataLayerContext.Provier value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provier>
)


export const useDataLayerValue = () => useContext(DataLayerContext);