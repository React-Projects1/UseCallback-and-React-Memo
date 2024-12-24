import React, { useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
import { useCallback } from "react";


const Result = ()=>{
    const [num1 ,setNum1] = useState(0)
    const [num2 ,setNum2] = useState(0)


    const clickNum1 = useCallback(()=>{
        setNum1( num1 + 1 )
    },[num1])

    const clickNum2 = useCallback(()=>{
        setNum2( num2 + 1 )
    },[num2])

    return(
        <>
            <Title/>
            <Count number= 'number1' count = {num1}></Count>
            <Button action = {clickNum1}>ADD Number 1</Button>

            <Count  number= 'number2' count = {num2}></Count>
            <Button action = {clickNum2}>ADD Number 2</Button>
        </>
    )
}

export default Result