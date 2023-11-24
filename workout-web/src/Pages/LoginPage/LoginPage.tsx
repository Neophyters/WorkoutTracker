import React, { FC, useState } from 'react';
import LoginForm from './LoginForm'; 
import SignUpForm from './SignUpForm';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      {showLogin ? (
        <div>
          <LoginForm />
          <p>
            Don't have an account?{' '}
            <span onClick={toggleForm} style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>
                Sign Up
            </span>
          </p>
        </div>
      ) : (
        <div>
          <SignUpForm />
          <p>
            Already have an account?{' '}
            <span onClick={toggleForm} style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>
                Login
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;