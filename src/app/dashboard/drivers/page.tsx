'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DriversPage() {
  const [drivers, setDrivers] = useState<any[]>([]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const API = 'http://51.68.173.153:3000';

  const loadDrivers = async () => {
    const res = await axios.get(
      `${API}/drivers`
    );

    setDrivers(res.data);
  };

  const addDriver = async () => {
    await axios.post(`${API}/drivers`, {
      name,
      phone,
      city,
    });

    setName('');
    setPhone('');
    setCity('');

    loadDrivers();
  };

  useEffect(() => {
    loadDrivers();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        Kierowcy 🚕
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Dodaj kierowcę
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <input
            className="border p-3 rounded"
            placeholder="Imię i nazwisko"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="Telefon"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="Miasto"
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
          />
        </div>

        <button
          onClick={addDriver}
          className="mt-4 bg-black text-white px-6 py-3 rounded-xl"
        >
          Dodaj
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6">
          Lista kierowców
        </h2>

        <div className="space-y-4">
          {drivers.map((driver) => (
            <div
              key={driver.id}
              className="border p-4 rounded-xl flex justify-between"
            >
              <div>
                <p className="font-bold text-xl">
                  {driver.name}
                </p>

                <p>
                  📞 {driver.phone}
                </p>

                <p>
                  📍 {driver.city}
                </p>
              </div>

              <div>
                {driver.active
                  ? '🟢 Aktywny'
                  : '🔴 Nieaktywny'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
