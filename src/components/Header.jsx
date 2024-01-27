import React from 'react'
import logoImg from '../assets/form_logo.jpg';
function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  )
}

export default Header