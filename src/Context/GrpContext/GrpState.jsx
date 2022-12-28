import GrpContext from "./GrpContext";
import { useState } from "react";


const GrpState=(props)=>{

    const [grpState,setgrpState]=useState("general");
    
    return (
    <GrpContext.Provider value={{grpState,setgrpState}}>
        {props.children}
    </GrpContext.Provider>
    );
}

export default GrpState