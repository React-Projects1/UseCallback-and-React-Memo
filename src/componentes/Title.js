import React from "react";

const Title = ()=>{
    console.log("rendering Title");
    
    return(
        <>
            <h2>Title</h2>
        </>
    )
}

export default React.memo(Title) 