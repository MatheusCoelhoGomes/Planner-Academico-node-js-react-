import './CriarData.css'
import BtnTexto from '../Buttons/Texto/BtnTexto'




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
            <BtnTexto margin ="2em 0em 0em 0em" onClick={() => {document.querySelector('.form-data').style.display = 'block';} }>Adicionar</BtnTexto>


            <div className="form-data">
                <div className="form-conteiner">
                    
                </div>
            </div>
        </>

    )
}

export default CriarData
