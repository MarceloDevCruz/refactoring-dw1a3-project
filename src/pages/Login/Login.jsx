// css
import './Login.css'

//hook
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigator = useNavigate('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    const validUser = {
      email,
      password
    }

    const user = JSON.parse(localStorage.getItem('user'))

    user.forEach((el) => {
      validUser.email === el.email && validUser.password === el.password
        ? navigator('/') : setError('Email ou senha inválidos')
    })

  }

  useEffect(() => {
    if (error) {
      setError(error)
    }
  }, [error])

  return (
    <div className="login">
      <h1>Faça Login</h1>
      <p>Faça login para continuar usando o site...</p>
      <form className="form">

        <label>
          <span>Email:</span>
          <input
            value={email}
            type="email"
            name="email"
            required
            placeholder="Email do usuário"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            value={password}
            type="password"
            name="password"
            required
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button className="btn" onClick={handleSubmit}>Login</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login