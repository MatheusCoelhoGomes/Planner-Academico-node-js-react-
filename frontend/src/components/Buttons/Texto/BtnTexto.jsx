
import './BtnTexto.css'

const BtnTexto = ({children,margin,...props},) => {
    
    return(
            <button style={{margin}}  className='buttonAdd' {...props}>
                <h1>
                    {children}
                </h1>
            </button>
    )
}

export default BtnTexto