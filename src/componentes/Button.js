import React from "react";

const Button = ({action,children})=>{
    console.log("rendering Button");
    return(
        <>
            <button onClick={action}>{children}</button>
        </>
    )
}
export default React.memo(Button) 