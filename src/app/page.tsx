'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const login = async () => {
    try {
      const res = await axios.post(
        'http://51.68.173.153:3000/auth/login',
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        'token',
        res.data.access_token
      );

      setResponse('Zalogowano 🚕');
    } catch (err) {
      setResponse('Błąd logowania');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Taxi Manager
        </h1>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 rounded mb-4"
          placeholder="Hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-black text-white p-3 rounded-xl"
        >
          Zaloguj
        </button>

        <p className="mt-4 text-center">
          {response}
        </p>
      </div>
    </main>
  );
}
