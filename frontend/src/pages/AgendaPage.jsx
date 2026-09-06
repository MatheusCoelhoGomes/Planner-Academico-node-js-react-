import React from "react"
import './AgendaPage.css'
import CriarData from "../components/Calendario/CriarData.jsx"

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
                <span>data-menu</span>
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