import { createContext } from "react";

const BioContext = createContext()

const BioProvider = ({children}) =>{
    const myName = "naman"
    const age = 18
    return (
    <BioContext.Provider value={{myName,age}}>{children}</BioContext.Provider>
    )
}

export {BioContext,BioProvider}

