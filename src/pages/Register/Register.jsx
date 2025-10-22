import styles from './Register.module.css'

import {useState, useEffect} from 'react'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(displayName, email, password, confirmPassword)
  }
  return (
    <div>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias.</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input 
              type="text" 
              maxLength={100} 
              minLength={6} 
              name="displayName" 
              required 
              placeholder='Nome do usuário'
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </label>

          <label>
            <span>Email:</span>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder='Email do usuário'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>Senha:</span>
            <input 
              type="password" 
              name="password" 
              required 
              placeholder='Insira sua senha'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            <span>Confirmação de Senha:</span>
            <input 
              type="password" 
              name="confirmPassword" 
              required 
              placeholder='Confirme sua senha'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register