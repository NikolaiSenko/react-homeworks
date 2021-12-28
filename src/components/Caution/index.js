import React from "react"
import "./styles.css";

const Caution = ({onClose}) => {
return(
    <div className='caution'>
        <div className="overlay">
            <div className="caution-body">
                <span onClick={onClose} className="btn-close">&times;</span>
                <h4>Вы можете выбрать не больше 5 элементов!</h4>
            </div>
        </div>
    </div>
)
}

export default Caution 