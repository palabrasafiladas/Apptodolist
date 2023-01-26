import React from "react";

function TodoItem (props) {

    return (
       <div> 


        <span>C</span>
        <p>{props.text}</p>
        <span>X</span>
       </div>

    );
}

export {TodoItem};