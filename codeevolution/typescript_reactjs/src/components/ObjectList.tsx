type ObjectListProps = {
    names: {
        first: string
        last: string
    }[]
}

const ObjectList = (props: ObjectListProps) => {
    return (
        <div>
            {props.names.map(name=> {  
                return ( <h2>{name.first} {name.last}</h2>)
            })}
        </div>
    )
}

export { ObjectList }