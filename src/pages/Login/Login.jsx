import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <h1>Faça Login</h1>
      <p>Faça login para continuar usando o site...</p>
      <form className="form">

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

        <button className="btn">Login</button>

      </form>
    </div>
  )
}

export default Login