import { useState } from 'react'

function AdicionarCliente(props) {
    let [nome, setNome] = useState('')
    let [nascimento, setNascimento] = useState('')
    let [email, setEmail] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        let dataFormatada = nascimento.split('-')[2] + '/' + nascimento.split('-')[1] + '/' + nascimento.split('-')[0];
        setNascimento(dataFormatada);

        props.onAdd({nome, nascimento, email})
        setNome('')
        setNascimento('')
        setEmail('')
    }

    return (
        <form className="add-form"  onSubmit={onSubmit}>
            <div className="form-control">
                <label>Nome:</label>
                <input type="text" placeholder="ex: Cássio Alves" value={nome} onChange={(e) => setNome(e.target.value)} required/>
            </div>
            <div className="form-control">
                <label>Data Nascimento:</label>
                <input type="date" placeholder="ex: 04/04/2000" value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Email:</label>
                <input type="email" placeholder="ex: email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>

            <input type='submit' value='Salvar' className="btn btn-block" />
        </form>
    )
}

export default AdicionarCliente
