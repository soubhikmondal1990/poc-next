'use client';

import { useState } from 'react';

import { useAppDispatch } from '@/store/hooks';

import { loginThunk } from '@/features/auth/authThunks';

export default function LoginPage() {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await dispatch(
      loginThunk({
        username,
        password,
      })
    );
  };

  return (
    <div>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}
