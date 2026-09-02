import './calendario.css';


function diasMes() {
    return(
        <>
            {Array.from({ length: 31 }, (_, i) => (
                <div key={i + 1}>{i + 1}</div>
            ))}
        </>
    );

}

const Calendario = () => {
    return(
        <div className="calendario-container">
            <div className="calendario">
                <span>data-menu</span>
                <div className = "dias-semana">
                    <span>DOM</span>
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
        </div>
    )
}

export default Calendario
                  
