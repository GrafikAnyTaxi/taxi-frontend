export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-10">
        Dashboard Managera 🚕
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Kierowcy
          </h2>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Auta
          </h2>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">
            Zmiany
          </h2>

          <p className="text-5xl mt-4">
            0
          </p>
        </div>
      </div>
    </main>
  );
}
