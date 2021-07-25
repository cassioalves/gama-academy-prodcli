import React from 'react'
import './Botao.css'

function Botao(props) {
    return (
        <div>
            <button onClick={props.onClick} style={{backgroundColor: props.color}} className='btn'>{props.text}</button>
        </div>
    )
}

export default Botao
