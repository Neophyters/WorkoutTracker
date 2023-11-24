import React, { FC, useState } from 'react';

interface SignUpFormProps { //wait for backend to store info
//   onSignUp: (username: string, password: string) => void;
}

const SignUpForm: FC<SignUpFormProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Perform any necessary validation before calling onSignUp
    // onSignUp(username, password);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
