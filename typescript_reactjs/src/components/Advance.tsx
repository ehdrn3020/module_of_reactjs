import { Heading } from "./Heading"

type AdvanceProps = {
    status:'loading' | 'success' | 'error'
}

export const Advance = (props:AdvanceProps) => {
    let message
    if (props.status=='loading'){
        message = 'Loading...'
    } else if (props.status=='success'){
        message = 'Data fetched successfully'
    } else if (props.status=='error'){
        message = 'Error fetching data'
    }
    return (
        <div>
            <h2>Status - {message}</h2>
            <Heading>Place</Heading>
        </div>
    )
}