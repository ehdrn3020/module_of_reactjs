import { ObjectProps } from './Object.types'

export const Object = (props: ObjectProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}