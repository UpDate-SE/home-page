import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString;
  };
  const [token, setToken] = useState<string | null>(() => getToken());

  const saveToken = (userToken:string) => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return {
    setToken: saveToken,
    token
  }
}