import Right from "./Right"
import Logo from '../assets/images/logo.svg'
import Left from "./Left"
import { useState } from "react"

function Calculater() {
    const [arg , setArg] = useState({ amount:'0',
                                      people: '0',
                                      tip:'0'  
                                     });

    return(
        <div className="flex flex-col justify-center items-center gap-8 h-full">
            
            <img src={Logo} />
            <div className="bg-white py-6 px-6 rounded-3xl md:flex md:gap-8 mt-10">
            <Left arg={arg} setArg={setArg}/>
            <Right arg={arg} setArg={setArg}/>
            </div>
        </div>
    )
}

export default Calculater