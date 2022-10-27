// css
import './Cadastrar.css'

// hooks
import { useState, useEffect } from 'react'

const Cadastrar = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fone, setFone] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
      setError('Digite um email válido')
      return
    }

    /* console.log(!email.indexOf('@') !== -1 && email.indexOf('.com') !== -1) */

    if (fone.length !== 11) {
      setError('O contato deve ter pelo menos 11 números (00) 00000-0000 ')
      return
    }

    if (!Number(fone)) {
      setError('O contato deve ter apenas números!')
      return
    }

    if (password.length < 8) {
      setError('A senha precisa ter no mínimo 8 caracteres')
      return
    }

    if (password !== confirmPassword) {
      setError('A senha deve ser iguais')
      return
    }

    if (name.length < 3) {
      setError('Nome deve ter pelo menos 3 caracteres')
      return
    }


    const user = JSON.parse(localStorage.getItem('user') || '[]')

    user.push({
      name,
      email,
      password,
      fone
    })

    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)

  }

  useEffect(() => {
    if (error) {
      setError(error)
    }
  }, [error])


  return (
    <div className="register">
      <h1>Faça seu Cadastro</h1>
      <p>Faça cadastro para continuar usando o site...</p>
      <form className="form">

        <label>
          <span>Nome:</span>
          <input
            value={name}
            type="text"
            name="name"
            required
            placeholder="Nome do usuário"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

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

        <label>
          <span>Confirme a senha:</span>
          <input
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <label>
          <span>Contato:</span>
          <input
            value={fone}
            type="fone"
            name="fone"
            required
            placeholder="Número para contato"
            onChange={(e) => setFone(e.target.value)}
          />
        </label>
        <button className="btn" onClick={handleSubmit}>Cadastrar</button>
        {error && <p className='error'>{error}</p>}
      </form>

    </div>
  )
}

export default Cadastrar