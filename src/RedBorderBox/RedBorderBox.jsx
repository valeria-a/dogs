const RedBorderBox = ({children, color='red'}) => {
    return(
        <div style={{border: `1px solid ${color}`}}>
            <p>My great box title</p>
            <div style={{border: '1px solid green'}}>
                {children}
            </div>
        </div>
    )
}

export default RedBorderBox