import { useState } from 'react'

function AdicionarProduto(props) {
    const [descricao, setDescricao] = useState('')
    const [detalhes, setDetalhes] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (isNaN(quantidade)) {
            alert('Por favor, informe apenas número na quantidade!')
            return
        }

        if (isNaN(valor.replace(',',''))) {
            alert('Por favor, informe apenas número no valor!')
            return
        }
        setValor(valor.replace('.', ','))
        props.onAdd({descricao, detalhes, quantidade, valor})
        setDescricao('')
        setDetalhes('')
        setQuantidade('')
        setValor('')
    }

    return (
        <form className="add-form"  onSubmit={onSubmit}>
            <div className="form-control">
                <label>Descrição:</label>
                <input type="text" placeholder="ex: Copo 250ml" value={descricao} onChange={(e) => setDescricao(e.target.value)} required/>
            </div>
            <div className="form-control">
                <label>Detalhes:</label>
                <input type="text" placeholder="ex: Copo transparente" value={detalhes} onChange={(e) => setDetalhes(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Quantidade:</label>
                <input type="text" placeholder="ex: 10" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required/>
            </div>
            <div className="form-control">
                <label>Valor:</label>
                <input type="text" placeholder="ex: 10,00" value={valor} onChange={(e) => setValor(e.target.value)} required/>
            </div>

            <input type='submit' value='Salvar' className="btn btn-block" />
        </form>
    )
}

export default AdicionarProduto
