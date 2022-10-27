import './Anuncie.css'

const Anuncie = () => {
  return (
    <div className="register">
      <h1>Anuncie</h1>
      <p>Faça o anuncio de seu imóvel, colocando as informações referentes ao seu imóvel...</p>
      <form className="form">

        <label>
          <span>Endereço:</span>
          <input
            type="text"
            name="endereco"
            required
            placeholder="Digite o endereço"
          />
        </label>

        <label>
          <span>Cidade:</span>
          <input
            type="text"
            name="cidade"
            required
            placeholder="Digite a cidade"
          />
        </label>

        <label>
          <span>CEP:</span>
          <input
            type="text"
            name="cep"
            required
            placeholder="Digite o CEP"
          />
        </label>

        <label>
          <span>Valor:</span>
          <input
            type="number"
            name="valor"
            required
            placeholder="Digite o valor do imóvel"
          />
        </label>

        <label>
          <span>Imagem:</span>
          <input
            type="url"
            name="url"
            required
            placeholder="Digite o url da imagem"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Anuncie