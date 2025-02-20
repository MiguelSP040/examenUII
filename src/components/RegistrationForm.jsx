import React, { useState } from 'react';

const RegistrationForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const validateName = (value) => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, name: 'El nombre es obligatoro' }));
    } else {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  const validateEmail = (value) => {
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, email: 'El email es obligatorio' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const validatePassword = (value) => {
    if (!value.trim()){
      setErrors((prev) => ({ ...prev, password: 'La constraseña es obligatoria' }));
    }else{
    if (value.length <= 6) {
      setErrors((prev) => ({ ...prev, password: 'La contraseña debe tener más de 6 caracteres' }));
    } else {
      setErrors((prev) => ({ ...prev, password: '' }));
    }}
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validatePassword(password);

    if (errors.name || errors.email || errors.password) {
      alert('Error, revisa que los campos estén complets');
      return;
    }

    onRegister({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateName(e.target.value);
          }}
        />
        <br/>
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        <br/>
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
        />
        <br/>
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegistrationForm;