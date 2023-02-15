import React from "react"

type EventProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id:number)=> void
}

export const EventClickButton = (props:EventProps) => {
    return (
        <button onClick={(event)=>props.handleClick(event,10)}>Click</button>
    )
}