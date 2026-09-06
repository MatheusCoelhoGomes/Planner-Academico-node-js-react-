import "./BtnCircular.css"

const BtnCircular = ({children,margin,...props},) => {
    
    return(
        <button style={{margin}} className="BtnCircular" {...props} >
            <h1>
                {children}
            </h1>
        </button>
    )
}

export default BtnCircular;