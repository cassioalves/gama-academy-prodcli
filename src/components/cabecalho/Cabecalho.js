import React from 'react'
import Botao from '../botao/Botao';
import './Cabecalho.css'

function Cabecalho(props) {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Botao color={props.showAdd ?? false ? 'red' : 'green'} text={props.showAdd ?? false ? 'Fechar' : 'Adicionar'} onClick={props.onAdd}/>
        </header>
    )
}

export default Cabecalho
