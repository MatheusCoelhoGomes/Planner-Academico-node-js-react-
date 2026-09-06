import React from "react"
import './AgendaPage.css'
import CriarData from "../components/Calendario/CriarData.jsx"
import BtnTexto from "../components/Buttons/Texto/BtnTexto.jsx";
import BtnCircular from "../components/Buttons/Circular/BtnCircular.jsx"


function diasMes() {
    return(
        <>
            {Array.from({ length: 31 }, (_, i) => (
                <div key={i + 1}>{i + 1}</div>
            ))}
        </>
    );
}

const AgendaPage = () => {
    return(
        <div className="calendario-container">
            <div className="calendario">
                <div className="select-data">
                    <BtnCircular margin=" 10px"/>
                    <h1>mês</h1>
                    <BtnCircular margin=" 10px"/>
                    <BtnTexto margin=" 10px 35px ">Hoje</BtnTexto>
                </div>
                <div className = "dias-semana">
                    <span id= "DOM">DOM</span>
                    <span>SEG</span>
                    <span>TER</span>
                    <span>QUA</span>
                    <span>QUI</span>
                    <span>SEX</span>
                    <span>SÁB</span>
                </div>
                <div className="dias-mes">
                    {diasMes()}
                </div>
            </div>
            <div className="gerenciar-datas">
                <CriarData />
                
                <div className="datas-criadas"></div>
                    <h1>categorias</h1>
            </div>
        </div>
    )
}

export default AgendaPage