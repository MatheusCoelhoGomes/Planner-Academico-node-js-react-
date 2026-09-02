import React from "react"
import './AgendaPage.css'

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
                <div className="criar-data"></div>
                    <h1>button</h1>
                <div className="datas-criadas"></div>
                    <h1>categorias</h1>
            </div>
        </div>
    )
}

export default AgendaPage