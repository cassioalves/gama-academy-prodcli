import React, { useState } from 'react'
import Cabecalho from '../cabecalho/Cabecalho'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AdicionarCliente from './AdicionarCliente'
import { FaTimes } from 'react-icons/fa'

function Clientes() {
    const [showAddCliente, setshowAddCliente] = useState(false)
    const [clientes, setTasks] = useState([])

    const addTask = (Cliente) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ... Cliente }
        setTasks([...clientes, newTask])
        setshowAddCliente(false);

        let jsonDados = JSON.stringify([...clientes, newTask]);
        localStorage.setItem('clientes', jsonDados);
      }

    const deleteTask = (id) => {
        setTasks(clientes.filter((Cliente) =>  Cliente.id !== id))

        let jsonDados = JSON.stringify(clientes.filter((Cliente) =>  Cliente.id !== id));
        localStorage.setItem('clientes', jsonDados);
      }

    return (
        <>
            <Router>
                <Cabecalho title='Clientes' onAdd={() => setshowAddCliente(!showAddCliente)} showAdd={showAddCliente}></Cabecalho>
                <Route path='/' exact render={(props) => ( <> 
                {showAddCliente && <AdicionarCliente onAdd={addTask} />}
                { clientes.length > 0 ? clientes.map((Cliente) => (
                    <p>{Cliente.nome} - {Cliente.nascimento} <FaTimes style={{color: 'red', cursor: 'poiter'}} onClick={() => deleteTask(Cliente.id)}/></p>
                ))  : ('Não há clientes cadastrados!') }
                </> )} />
            </Router>
             
        </>
    )
}

export default Clientes
