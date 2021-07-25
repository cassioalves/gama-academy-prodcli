import React, { useState } from 'react'
import Cabecalho from '../cabecalho/Cabecalho'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AdicionarProduto from './AdicionarProduto'
import { FaTimes } from 'react-icons/fa'

function Produtos() {
    const [showAddProduto, setshowAddProduto] = useState(false)
    const [produtos, setTasks] = useState([])

    const addTask = (produto) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ... produto }
        setTasks([...produtos, newTask])
        setshowAddProduto(false);

        let jsonDados = JSON.stringify([...produtos, newTask]);
        localStorage.setItem('produtos', jsonDados);
      }

    const deleteTask = (id) => {
        setTasks(produtos.filter((produto) =>  produto.id !== id))

        let jsonDados = JSON.stringify(produtos.filter((produto) =>  produto.id !== id));
        localStorage.setItem('produtos', jsonDados);
      }

    return (
        <>
            <Router>
                <Cabecalho title='Produtos' onAdd={() => setshowAddProduto(!showAddProduto)} showAdd={showAddProduto}></Cabecalho>
                <Route path='/' exact render={(props) => ( <> 
                {showAddProduto && <AdicionarProduto onAdd={addTask} />}
                { produtos.length > 0 ? produtos.map((produto) => (
                    <p>{produto.descricao} - {produto.quantidade} - {produto.valor} <FaTimes style={{color: 'red', cursor: 'poiter'}} onClick={() => deleteTask(produto.id)}/></p>
                ))  : ('Não há produtos cadastrados!') }
                </> )} />
            </Router>
             
        </>
    )
}

export default Produtos
