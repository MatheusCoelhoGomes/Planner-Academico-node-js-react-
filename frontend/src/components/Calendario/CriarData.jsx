import './CriarData.css'
import BtnTexto from '../Buttons/Texto/BtnTexto'
import BtnCircular from '../Buttons/Circular/BtnCircular'
import { useState } from 'react';

const prova = false;



const FormDataTarefa = () => {
    return(
        <>
            <h1>teste</h1>
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
            <h1>teste2</h1>
            <form>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="Data"></input>
                <input type="text" placeholder="Horario"></input>
                <input type="text" placeholder="Descrição"></input>
            </form>
        </>
    )
}

const Form = (prova) => {
    if(!prova){
        return <FormDataEvento/>;
    }
    else{
        return <FormDataTarefa/>;
    }
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
                        <BtnTexto style={{borderRadius:'10px',}} className='BtnTarefa'>Tarefa</BtnTexto>
                        <BtnTexto style={{borderRadius:'10px',margin:"0em 1em"}} className='BtnProva'>Prova</BtnTexto>
                    </div>
                    <Form></Form>
                </div>
            </div>
        </>
    )
}

export default CriarData
