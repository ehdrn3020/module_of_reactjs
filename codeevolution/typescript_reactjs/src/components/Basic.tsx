type BasicProps = {
    name:string
    messageCount:number
    isLoggedIn:boolean
}

const Basic = (props:BasicProps) => {
    return (
        <div>
            {
                props.isLoggedIn 
                    ? <h2>Welcome {props.name}! You have {props.messageCount} message count</h2>
                    : <h2>Welcom Guest</h2>
            }
        </div>
    )
}

export { Basic };