// css
import './Anuncie.css'

// hooks
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Anuncie = () => {

  const [endereco, setEndereco] = useState('')
  const [cidade, setCidade] = useState('')
  const [cep, setCEP] = useState('')
  const [valor, setValor] = useState('')
  const [url, setURL] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    if (endereco.length === 0) {
      setError('Coloque um endereço válido')
      return
    }

    if (cidade.length === 0) {
      setError('Coloque uma cidade válida')
      return
    }

    if (url.length === 0) {
      setError('Coloque uma url válida')
      return
    }

    if (cep.length !== 8) {
      setError('O cep deve conter 8 digitos')
      return
    }

    if (!Number(cep)) {
      setError('O cep deve conter apenas números')
      return
    }

    if (!Number(cep)) {
      setError('O valor deve ter apenas números')
      return
    }

    const imovel = JSON.parse(localStorage.getItem('imovel') || '[]')

    imovel.push({
      endereco,
      cidade,
      cep,
      valor,
      url
    })

    localStorage.setItem('imovel', JSON.stringify(imovel))

    navigate('/apartamentos')
  }

  return (
    <div className="anuncio">
      <h1>Anuncie</h1>
      <p>Faça o anuncio de seu imóvel, colocando as informações referentes ao seu imóvel...</p>
      <form className="form">

        <label>
          <span>Endereço:</span>
          <input
            value={endereco}
            type="text"
            name="endereco"
            required
            placeholder="Digite o endereço"
            onChange={(e) => setEndereco(e.target.value)}
          />
        </label>

        <label>
          <span>Cidade:</span>
          <input
            value={cidade}
            type="text"
            name="cidade"
            required
            placeholder="Digite a cidade"
            onChange={(e) => setCidade(e.target.value)}
          />
        </label>

        <label>
          <span>CEP:</span>
          <input
            value={cep}
            type="text"
            name="cep"
            required
            placeholder="Digite o CEP"
            onChange={(e) => setCEP(e.target.value)}
          />
        </label>

        <label>
          <span>Valor:</span>
          <input
            value={valor}
            type="number"
            name="valor"
            required
            placeholder="Digite o valor do imóvel"
            onChange={(e) => setValor(e.target.value)}
          />
        </label>

        <label>
          <span>Imagem:</span>
          <input
            value={url}
            type="url"
            name="url"
            required
            placeholder="Digite o url da imagem"
            onChange={(e) => setURL(e.target.value)}
          />
        </label>
        <button className="btn" onClick={handleSubmit}>Cadastrar</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Anuncie