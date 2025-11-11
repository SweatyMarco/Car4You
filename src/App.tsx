import { DesktopView } from "./components/DesktopView";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-blue-600">Car4You</h1>
              <p className="text-gray-600 mt-1">
                UX/UI Design. Fahrzeug Mietformular
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ein einziges, responsives Formular */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <DesktopView />
      </div>
    </div>
  );
}
