import { useContext } from "react"
import { BioContext } from "./components/Context"

const useBioContext = () =>{
    const context = useContext(BioContext)
    return context
}
export {useBioContext}