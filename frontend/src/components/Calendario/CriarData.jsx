import './CriarData.css'
import '../Buttons/Adicionar/BtnAdicionar'
import BtnAdicionar from '../Buttons/Adicionar/BtnAdicionar'




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
            <BtnAdicionar margin ="50px 0px 0px 0px" onClick={() => {document.querySelector('.form-data').style.display = 'block';} }>Adicionar</BtnAdicionar>

            <div className="form-data">
                
            </div>
        </>

    )
}

export default CriarData
