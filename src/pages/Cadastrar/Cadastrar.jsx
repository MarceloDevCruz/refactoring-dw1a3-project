import './Cadastrar.css'

const Cadastrar = () => {
  return (
    <div className="register">
      <h1>Faça seu Cadastro</h1>
      <p>Faça cadastro para continuar usando o site...</p>
      <form className="form">

        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Nome do usuário"
          />
        </label>

        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email do usuário"
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Digite sua senha"
          />
        </label>

        <label>
          <span>Confirme a senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
          />
        </label>

        <label>
          <span>Contato:</span>
          <input
            type="fone"
            name="fone"
            required
            placeholder="Número para contato"
          />
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastrar