import React from "react";

function TodoList(props){
    return (
<section>
    <div>
        {props.children}
    </div>
</section>
    );
}

export {TodoList};