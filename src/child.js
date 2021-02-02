import React, { } from "react";

function Child(props) {
    return (
        <React.Fragment>
            <button>{props.count}</button>
            <button name={"ankit"} onClick={(e) => props.changeCount(e, "Ankit")}>{props.title}</button>
        </React.Fragment>
    )
}

export default Child