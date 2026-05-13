'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<any[]>([]);

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [plateNumber, setPlateNumber] =
    useState('');

  const API = 'http://51.68.173.153:3000';

  const loadVehicles = async () => {
    const res = await axios.get(
      `${API}/vehicles`
    );

    setVehicles(res.data);
  };

  const addVehicle = async () => {
    await axios.post(`${API}/vehicles`, {
      brand,
      model,
      plateNumber,
      active: true,
    });

    setBrand('');
    setModel('');
    setPlateNumber('');

    loadVehicles();
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        Auta 🚕
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-2xl font-bold mb-4">
          Dodaj auto
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <input
            className="border p-3 rounded"
            placeholder="Marka"
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value)
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="Model"
            value={model}
            onChange={(e) =>
              setModel(e.target.value)
            }
          />

          <input
            className="border p-3 rounded"
            placeholder="Rejestracja"
            value={plateNumber}
            onChange={(e) =>
              setPlateNumber(e.target.value)
            }
          />
        </div>

        <button
          onClick={addVehicle}
          className="mt-4 bg-black text-white px-6 py-3 rounded-xl"
        >
          Dodaj
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-6">
          Lista aut
        </h2>

        <div className="space-y-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="border p-4 rounded-xl flex justify-between"
            >
              <div>
                <p className="font-bold text-xl">
                  {vehicle.brand} {vehicle.model}
                </p>

                <p>
                  🚘 {vehicle.plateNumber}
                </p>
              </div>

              <div>
                {vehicle.active
                  ? '🟢 Aktywne'
                  : '🔴 Nieaktywne'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
