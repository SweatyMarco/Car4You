import { useState } from "react";
import { DesktopView } from "./components/DesktopView";
import { MobileView } from "./components/MobileView";
import { Monitor, Smartphone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

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
                UX/UI Design: Fahrzeug-Mietformular
              </p>
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
    </div>
  );
}
