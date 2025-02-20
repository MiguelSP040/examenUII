import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>Datos del Usuario</h2>
      <p><strong>Nombre: </strong> {user.name}</p>
      <p><strong>Email: </strong> {user.email}</p>
      <p><strong>Contraseña: </strong> {user.password}</p>
    </div>
  );
};

export default UserDetails;