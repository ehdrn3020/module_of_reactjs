type CssProps = {
    styles: React.CSSProperties
}

export const Css = (props: CssProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    )
}