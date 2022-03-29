import { useState } from "react";

function useCounter() {
     const [increment,setIncrement]=useState(0)
     const handleIncrement=()=>{
        setIncrement(increment + 1)
     }
     return {
         increment,
         handleIncrement
     }
}

export  default useCounter