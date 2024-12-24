import React from "react";

const Count = ({number ,count})=>{
    console.log( number,"rendering");

    return(
        <>
            <p>{number} : {count}</p>
        </>
    )
}
export default React.memo(Count) 