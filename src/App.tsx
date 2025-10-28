import { useState } from 'react';
import { DesktopView } from './components/DesktopView';
import { MobileView } from './components/MobileView';
import { Monitor, Smartphone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-blue-600">Car4You</h1>
              <p className="text-gray-600 mt-1">UX/UI Design: Fahrzeug-Mietformular</p>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Switcher */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="desktop" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="desktop" className="flex items-center gap-2">
              <Monitor className="w-4 h-4" />
              Desktop Layout
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Mobile Layout
            </TabsTrigger>
          </TabsList>

          <TabsContent value="desktop">
            <DesktopView />
          </TabsContent>

          <TabsContent value="mobile">
            <MobileView />
          </TabsContent>
        </Tabs>
      </div>

      {/* UX Explanation Section */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-blue-600">UX-Begründung & Design-Entscheidungen</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personas */}
            <div className="space-y-4">
              <h3 className="text-gray-900">Personas & Design-Anpassungen</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="text-blue-700 mb-2">👨‍💼 Luca, 28 – Geschäftsreisender</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Große, gut erreichbare Touch-Bereiche (min. 44px)</li>
                  <li>• Schnelle Navigation durch logische Gruppierung</li>
                  <li>• Mobile-optimiertes Layout für unterwegs</li>
                  <li>• Klare Call-to-Action Buttons</li>
                  <li>• Auto-Fill freundliche Formularfelder</li>
                </ul>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                <h4 className="text-cyan-700 mb-2">👩‍🎓 Sophie, 22 – Studentin</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Preisrahmen prominent mit Live-Anzeige</li>
                  <li>• Übersichtliche Darstellung aller Kosten</li>
                  <li>• Hilfreiche Tooltips und Labels</li>
                  <li>• Budget-freundliche Optionen hervorgehoben</li>
                  <li>• Klare Struktur für einfachen Vergleich</li>
                </ul>
              </div>
            </div>

            {/* Design Decisions */}
            <div className="space-y-4">
              <h3 className="text-gray-900">Komponenten-Auswahl</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                  <div>
                    <strong>Date-Picker mit Zeitauswahl:</strong> Verhindert Fehleingaben, zeigt nur verfügbare Termine
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                  <div>
                    <strong>Visual Cards für Fahrzeugkategorien:</strong> Schnelle Orientierung durch Icons und Bilder
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                  <div>
                    <strong>Slider mit Live-Feedback:</strong> Intuitive Preisauswahl mit sofortiger visueller Rückmeldung
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                  <div>
                    <strong>Checkboxen mit Icons:</strong> Extras auf einen Blick erkennbar, Mehrfachauswahl klar kommuniziert
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                  <div>
                    <strong>Radio Buttons für Prioritäten:</strong> Exklusive Auswahl mit klaren Beschreibungen
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                  <div>
                    <strong>Farbcodierung:</strong> Hellblau/Cyan für Vertrauen, Orange für CTAs, Rot für Fehler
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsive Strategy */}
          <div className="border-t pt-6 mt-6">
            <h3 className="text-gray-900 mb-4">Responsive Design-Strategie</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="text-blue-600 mb-2">Desktop (≥1024px)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Zweispaltige Gruppierung für Übersichtlichkeit</li>
                  <li>• Persönliche Daten + Mietdauer nebeneinander</li>
                  <li>• Fahrzeugwahl als Grid mit 3-5 Spalten</li>
                  <li>• Extras horizontal angeordnet</li>
                  <li>• Formular max. 1200px Breite, zentriert</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-600 mb-2">Mobile (≤768px)</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Einspaltiges Layout für optimale Lesbarkeit</li>
                  <li>• Touch-optimierte Controls (min. 44px Höhe)</li>
                  <li>• Sticky Submit-Button am unteren Bildschirmrand</li>
                  <li>• Vereinfachte Navigation durch Sectionen</li>
                  <li>• Größere Schrift für mobile Lesbarkeit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
