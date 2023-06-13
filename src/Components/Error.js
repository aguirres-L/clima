
import "./Csss/Error.css"

export default function Error({ubi}){

    return(
        <div className="error">
            <p>No hay datos sobre <strong>"{ubi}"</strong></p>
        </div>
    )
}