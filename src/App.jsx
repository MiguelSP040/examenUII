import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import UserDetails from './components/UserDetails';

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      {!user ? (
        <RegistrationForm onRegister={handleRegister} />
      ) : (
        <UserDetails user={user} />
      )}
    </div>
  );
};

export default App;