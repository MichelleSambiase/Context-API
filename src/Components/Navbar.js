import React, { useContext } from "react";
import UserContext from "../contexts/userContext";

const Navbar = () => {
console.log('Navbar')
const { user, login, logout } = useContext(UserContext)

return (
<nav className="nabvar navbar-dark bg-dark mb-4">
  <div className="container">
    <span className="navbar-brand">
      <h2>{user ? `Hola ${user.name}` : "Bienvenid@"}</h2>
    </span>

    { user
    ?
    <button className="btn btn-primary" onClick={logout}>Cerrar Sesion</button>
    :
    <button className="btn btn-primary" onClick={login}>Iniciar Sesion</button>
    }
  </div>
</nav>
);
};

export default Navbar;