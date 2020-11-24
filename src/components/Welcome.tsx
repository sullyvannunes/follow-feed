import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

import '../styles/Welcome.css';

import logo from '../images/logo.png';

export default function Welcome(): ReactElement {
  return (
    <div className="Welcome">
      <Link to="/sign_in">
        <BiUserCircle className="UserIcon"></BiUserCircle>
      </Link>

      <p>
        Seja muito bem vindo ao Follow Feeds.
      </p>
      <p>
        O Follow Feeds irá te ajudar a agregar todos os Feeds RSS que você consome.
      </p>

      <p>
        Dessa forma você não precisará mais acessar todo dias os seus blogs favoritos procurando conteúdo novo. Você só precisar acessar o Follow Feeds.
      </p>

      <img src={ logo } alt="Follow Feeds logo"/>
      <footer>
        Criado por <a href="https://www.linkedin.com/in/sullyvan-nunes-0bb285a7/" target="_blank"> Sullyvan Nunes</a>
      </footer>
    </div>
  )
}
