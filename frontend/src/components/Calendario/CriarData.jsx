import './CriarData.css'
import BtnTexto from '../Buttons/Texto/BtnTexto'
import BtnCircular from '../Buttons/Circular/BtnCircular'


const FormDataTarefa = () => {
    return(
        <>
            <form>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="Data"></input>
                <input type="text" placeholder="Horario"></input>
                <input type="text" placeholder="Materia"></input>
                <input type="text" placeholder="Descrição"></input>
            </form>
        </>
    )
}
const FormDataEvento = () => {
    return(
        <>
            <form>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="Data"></input>
                <input type="text" placeholder="Horario"></input>
                <input type="text" placeholder="Descrição"></input>
            </form>
        </>
    )
}


const CriarData = () => {

    return(
        <>
            <BtnTexto margin ="2em 0em 0em 0em" onClick={() => {document.querySelector('.form-data').style.display ="flex";} }>Adicionar</BtnTexto>


            <div className="form-data">
                <div className='cabecalho'>
                    <BtnCircular margin="1em 1em 0em 0em" onClick={() => {document.querySelector('.form-data').style.display ="none";}}></BtnCircular>
                </div>
                <div className="form-container">
                    <div className='select'>
                        <BtnTexto style={{borderRadius:'10px',}}>select</BtnTexto>
                        <BtnTexto style={{borderRadius:'10px',margin:"0em 1em"}}>select</BtnTexto>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CriarData
