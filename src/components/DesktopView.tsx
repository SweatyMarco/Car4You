import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Slider } from './ui/slider';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarIcon, Car, Users, Navigation, Box, Shield, Baby, CircleDollarSign, Leaf, Palette, Sparkles } from 'lucide-react';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';

export function DesktopView() {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [priceRange, setPriceRange] = useState([80]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [priority, setPriority] = useState('');

  const categories = [
    { id: 'city', name: 'City', icon: '🚗', description: 'Kompakt & wendig' },
    { id: 'family', name: 'Family', icon: '🚙', description: 'Viel Platz' },
    { id: 'suv', name: 'SUV', icon: '🚙', description: 'Geländetauglich' },
    { id: 'sport', name: 'Sport', icon: '🏎️', description: 'Dynamisch' },
    { id: 'ecar', name: 'E-Car', icon: '⚡', description: 'Elektrisch' },
  ];

  const extras = [
    { id: 'kindersitz', label: 'Kindersitz', icon: Baby },
    { id: 'zusatzfahrer', label: 'Zusatzfahrer', icon: Users },
    { id: 'navi', label: 'Navigation', icon: Navigation },
    { id: 'dachbox', label: 'Dachbox', icon: Box },
    { id: 'vollkasko', label: 'Vollkasko', icon: Shield },
  ];

  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev =>
      prev.includes(extraId)
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8 text-center">
          <h2 className="text-blue-600 mb-2">Desktop Layout</h2>
          <p className="text-gray-600">Optimiert für effiziente Dateneingabe am Arbeitsplatz</p>
        </div>

        <form className="space-y-8">
          {/* Section 1: Personal Data & Rental Period */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Data */}
            <Card className="p-6 border-2 border-blue-100 bg-blue-50/30">
              <h3 className="text-blue-700 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Persönliche Daten
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstname">Vorname</Label>
                    <Input id="firstname" placeholder="Max" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastname">Nachname</Label>
                    <Input id="lastname" placeholder="Mustermann" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-Mail</Label>
                  <Input id="email" type="email" placeholder="max@beispiel.ch" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefonnummer</Label>
                  <Input id="phone" type="tel" placeholder="+41 79 123 45 67" className="mt-1" />
                </div>
              </div>
            </Card>

            {/* Rental Period */}
            <Card className="p-6 border-2 border-cyan-100 bg-cyan-50/30">
              <h3 className="text-cyan-700 mb-4 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Mietdauer
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Abholdatum</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start mt-1"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {pickupDate ? format(pickupDate, 'dd.MM.yyyy', { locale: de }) : 'Datum wählen'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={pickupDate}
                          onSelect={setPickupDate}
                          disabled={(date) => date < new Date()}
                          locale={de}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="pickup-time">Abholzeit</Label>
                    <Select>
                      <SelectTrigger id="pickup-time" className="mt-1">
                        <SelectValue placeholder="Zeit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">08:00</SelectItem>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Rückgabedatum</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start mt-1"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, 'dd.MM.yyyy', { locale: de }) : 'Datum wählen'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          disabled={(date) => date < (pickupDate || new Date())}
                          locale={de}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="return-time">Rückgabezeit</Label>
                    <Select>
                      <SelectTrigger id="return-time" className="mt-1">
                        <SelectValue placeholder="Zeit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00">08:00</SelectItem>
                        <SelectItem value="09:00">09:00</SelectItem>
                        <SelectItem value="10:00">10:00</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="16:00">16:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Section 2: Vehicle Selection */}
          <Card className="p-6 border-2 border-blue-100">
            <h3 className="text-blue-700 mb-4 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Fahrzeugwahl
            </h3>
            
            {/* Category Selection */}
            <div className="mb-6">
              <Label className="mb-3 block">Kategorie</Label>
              <div className="grid grid-cols-5 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                      selectedCategory === cat.id
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{cat.icon}</div>
                    <div className="text-sm">{cat.name}</div>
                    <div className="text-xs text-gray-500">{cat.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="transmission">Getriebe</Label>
                <Select>
                  <SelectTrigger id="transmission" className="mt-1">
                    <SelectValue placeholder="Wählen Sie..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manuell</SelectItem>
                    <SelectItem value="automatic">Automatik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="color">Farbe (optional)</Label>
                <Select>
                  <SelectTrigger id="color" className="mt-1">
                    <SelectValue placeholder="Keine Präferenz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="black">Schwarz</SelectItem>
                    <SelectItem value="white">Weiß</SelectItem>
                    <SelectItem value="silver">Silber</SelectItem>
                    <SelectItem value="blue">Blau</SelectItem>
                    <SelectItem value="red">Rot</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Section 3: Extras */}
          <Card className="p-6 border-2 border-cyan-100">
            <h3 className="text-cyan-700 mb-4">Extras (Mehrfachauswahl)</h3>
            <div className="grid grid-cols-5 gap-4">
              {extras.map((extra) => {
                const Icon = extra.icon;
                return (
                  <div
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedExtras.includes(extra.id)
                        ? 'border-cyan-500 bg-cyan-50'
                        : 'border-gray-200 hover:border-cyan-300'
                    }`}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon className={`w-8 h-8 ${selectedExtras.includes(extra.id) ? 'text-cyan-600' : 'text-gray-400'}`} />
                    </div>
                    <Checkbox
                      id={extra.id}
                      checked={selectedExtras.includes(extra.id)}
                      className="mx-auto block"
                    />
                    <Label htmlFor={extra.id} className="text-center block mt-2 text-sm cursor-pointer">
                      {extra.label}
                    </Label>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Section 4: Budget & Priority */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-2 border-orange-100 bg-orange-50/30">
              <h3 className="text-orange-700 mb-4 flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5" />
                Preisrahmen
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">CHF 40</span>
                  <span className="text-2xl text-orange-600">CHF {priceRange[0]}</span>
                  <span className="text-sm text-gray-600">CHF 120</span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={40}
                  max={120}
                  step={5}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">Pro Tag – ziehen Sie den Regler für Ihre Preisspanne</p>
              </div>
            </Card>

            <Card className="p-6 border-2 border-purple-100 bg-purple-50/30">
              <h3 className="text-purple-700 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Ihre Priorität
              </h3>
              <RadioGroup value={priority} onValueChange={setPriority}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-purple-50">
                    <RadioGroupItem value="price" id="price" />
                    <Label htmlFor="price" className="cursor-pointer flex-1">
                      <span className="block">💰 Preis</span>
                      <span className="text-xs text-gray-500">Bestes Angebot zählt</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-purple-50">
                    <RadioGroupItem value="comfort" id="comfort" />
                    <Label htmlFor="comfort" className="cursor-pointer flex-1">
                      <span className="block">✨ Komfort</span>
                      <span className="text-xs text-gray-500">Luxus & Ausstattung</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-purple-50">
                    <RadioGroupItem value="sustainability" id="sustainability" />
                    <Label htmlFor="sustainability" className="cursor-pointer flex-1">
                      <span className="block">🌱 Nachhaltigkeit</span>
                      <span className="text-xs text-gray-500">Umweltfreundlich</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded hover:bg-purple-50">
                    <RadioGroupItem value="design" id="design" />
                    <Label htmlFor="design" className="cursor-pointer flex-1">
                      <span className="block">🎨 Design</span>
                      <span className="text-xs text-gray-500">Style & Ästhetik</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </Card>
          </div>

          {/* Section 5: Comments */}
          <Card className="p-6 border-2 border-gray-100">
            <h3 className="text-gray-700 mb-4">Bemerkungen</h3>
            <Textarea
              placeholder="Haben Sie besondere Wünsche oder Anmerkungen? (max. 250 Zeichen)"
              maxLength={250}
              rows={4}
              className="resize-none"
            />
            <p className="text-xs text-gray-500 mt-2">Optional – teilen Sie uns besondere Anforderungen mit</p>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Fahrzeug jetzt reservieren
            </Button>
          </div>
        </form>
      </div>

      {/* Design Notes */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="text-blue-700 mb-2">💡 Desktop-Layout Highlights</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>✓ Zweispaltige Gruppierung für maximale Übersichtlichkeit (Luca: schneller Überblick)</li>
          <li>✓ Visual Cards mit Icons für schnelle Orientierung</li>
          <li>✓ Preisrahmen prominent dargestellt (Sophie: Budget im Blick)</li>
          <li>✓ Farbcodierte Sektionen für klare visuelle Hierarchie</li>
          <li>✓ Großzügige Abstände und Touch-freundliche Elemente</li>
        </ul>
      </div>
    </div>
  );
}
