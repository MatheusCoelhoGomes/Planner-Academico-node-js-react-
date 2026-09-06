
import './BtnAdicionar.css'

const BtnAdicionar = ({children,margin,...props},) => {
    
    return(
            <button style={{margin}}  className='buttonAdd' {...props}>
                <h1>
                    {children}
                </h1>
            </button>
    )
}

export default BtnAdicionar