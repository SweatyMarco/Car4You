import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Calendar as CalendarIcon,
  Car,
  Users,
  Navigation,
  Box,
  Shield,
  Baby,
  CircleDollarSign,
  ChevronRight,
} from "lucide-react";
import { format } from "date-fns";
import { de } from "date-fns/locale";

export function MobileView() {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [priceRange, setPriceRange] = useState([80]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [priority, setPriority] = useState("");

  const categories = [
    { id: "city", name: "City", icon: "🚗", description: "Kompakt" },
    { id: "family", name: "Family", icon: "🚙", description: "Geräumig" },
    { id: "suv", name: "SUV", icon: "🚙", description: "Robust" },
    { id: "sport", name: "Sport", icon: "🏎️", description: "Sportlich" },
    { id: "ecar", name: "E-Car", icon: "⚡", description: "Elektrisch" },
  ];

  const extras = [
    { id: "kindersitz", label: "Kindersitz", icon: Baby },
    { id: "zusatzfahrer", label: "Zusatzfahrer", icon: Users },
    { id: "navi", label: "Navigation", icon: Navigation },
    { id: "dachbox", label: "Dachbox", icon: Box },
    { id: "vollkasko", label: "Vollkasko", icon: Shield },
  ];

  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl">
        {/* Mobile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-t-2xl">
          <h2 className="mb-1">Mobile Layout</h2>
          <p className="text-blue-100 text-sm">
            Optimiert für Touch & Unterwegs
          </p>
        </div>

        <form className="p-6 space-y-6">
          {/* Section 1: Personal Data */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-blue-100">
              <Users className="w-5 h-5 text-blue-600" />
              <h3 className="text-blue-700">Persönliche Daten</h3>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="m-firstname">Vorname</Label>
                <Input
                  id="m-firstname"
                  placeholder="Max"
                  className="mt-1 h-12"
                />
              </div>
              <div>
                <Label htmlFor="m-lastname">Nachname</Label>
                <Input
                  id="m-lastname"
                  placeholder="Mustermann"
                  className="mt-1 h-12"
                />
              </div>
              <div>
                <Label htmlFor="m-email">E-Mail</Label>
                <Input
                  id="m-email"
                  type="email"
                  placeholder="max@beispiel.ch"
                  className="mt-1 h-12"
                />
              </div>
              <div>
                <Label htmlFor="m-phone">Telefonnummer</Label>
                <Input
                  id="m-phone"
                  type="tel"
                  placeholder="+41 79 123 45 67"
                  className="mt-1 h-12"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Rental Period */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-cyan-100">
              <CalendarIcon className="w-5 h-5 text-cyan-600" />
              <h3 className="text-cyan-700">Mietdauer</h3>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg space-y-4">
              <div>
                <Label className="text-cyan-900">Abholung</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start h-12 bg-white"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {pickupDate
                          ? format(pickupDate, "dd.MM", { locale: de })
                          : "Datum"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={setPickupDate}
                        disabled={(date: Date) => date < new Date()}
                        locale={de}
                      />
                    </PopoverContent>
                  </Popover>
                  <Select>
                    <SelectTrigger className="h-12 bg-white">
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

              <div>
                <Label className="text-cyan-900">Rückgabe</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start h-12 bg-white"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate
                          ? format(returnDate, "dd.MM", { locale: de })
                          : "Datum"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        disabled={(date: Date) =>
                          date < (pickupDate || new Date())
                        }
                        locale={de}
                      />
                    </PopoverContent>
                  </Popover>
                  <Select>
                    <SelectTrigger className="h-12 bg-white">
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
          </div>

          {/* Section 3: Vehicle Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-blue-100">
              <Car className="w-5 h-5 text-blue-600" />
              <h3 className="text-blue-700">Fahrzeugwahl</h3>
            </div>

            <div>
              <Label className="mb-3 block">Kategorie</Label>
              <div className="grid grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-3 rounded-xl border-2 transition-all min-h-[88px] ${
                      selectedCategory === cat.id
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="text-2xl mb-1">{cat.icon}</div>
                    <div className="text-xs">{cat.name}</div>
                    <div className="text-xs text-gray-500">
                      {cat.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="m-transmission">Getriebe</Label>
                <Select>
                  <SelectTrigger id="m-transmission" className="mt-1 h-12">
                    <SelectValue placeholder="Wählen Sie..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manuell</SelectItem>
                    <SelectItem value="automatic">Automatik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="m-color">Farbe (optional)</Label>
                <Select>
                  <SelectTrigger id="m-color" className="mt-1 h-12">
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
          </div>

          {/* Section 4: Extras */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-cyan-100">
              <Shield className="w-5 h-5 text-cyan-600" />
              <h3 className="text-cyan-700">Extras</h3>
            </div>
            <div className="space-y-2">
              {extras.map((extra) => {
                const Icon = extra.icon;
                return (
                  <div
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all min-h-[60px] ${
                      selectedExtras.includes(extra.id)
                        ? "border-cyan-500 bg-cyan-50"
                        : "border-gray-200"
                    }`}
                  >
                    <Checkbox
                      id={`m-${extra.id}`}
                      checked={selectedExtras.includes(extra.id)}
                      className="w-5 h-5"
                    />
                    <Icon
                      className={`w-6 h-6 ${
                        selectedExtras.includes(extra.id)
                          ? "text-cyan-600"
                          : "text-gray-400"
                      }`}
                    />
                    <Label
                      htmlFor={`m-${extra.id}`}
                      className="flex-1 cursor-pointer"
                    >
                      {extra.label}
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 5: Budget */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-orange-100">
              <CircleDollarSign className="w-5 h-5 text-orange-600" />
              <h3 className="text-orange-700">Preisrahmen</h3>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">CHF 40</span>
                <span className="text-3xl text-orange-600">
                  CHF {priceRange[0]}
                </span>
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
              <p className="text-xs text-center text-gray-600">Pro Tag</p>
            </div>
          </div>

          {/* Section 6: Priority */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-purple-100">
              <span className="text-purple-600">✨</span>
              <h3 className="text-purple-700">Ihre Priorität</h3>
            </div>
            <RadioGroup value={priority} onValueChange={setPriority}>
              <div className="space-y-2">
                <div
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 min-h-[60px] ${
                    priority === "price"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem
                    value="price"
                    id="m-price"
                    className="w-5 h-5"
                  />
                  <Label htmlFor="m-price" className="cursor-pointer flex-1">
                    <span className="block">💰 Preis</span>
                    <span className="text-xs text-gray-500">
                      Bestes Angebot
                    </span>
                  </Label>
                </div>
                <div
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 min-h-[60px] ${
                    priority === "comfort"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem
                    value="comfort"
                    id="m-comfort"
                    className="w-5 h-5"
                  />
                  <Label htmlFor="m-comfort" className="cursor-pointer flex-1">
                    <span className="block">✨ Komfort</span>
                    <span className="text-xs text-gray-500">Luxus</span>
                  </Label>
                </div>
                <div
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 min-h-[60px] ${
                    priority === "sustainability"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem
                    value="sustainability"
                    id="m-sustainability"
                    className="w-5 h-5"
                  />
                  <Label
                    htmlFor="m-sustainability"
                    className="cursor-pointer flex-1"
                  >
                    <span className="block">🌱 Nachhaltigkeit</span>
                    <span className="text-xs text-gray-500">
                      Umweltfreundlich
                    </span>
                  </Label>
                </div>
                <div
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 min-h-[60px] ${
                    priority === "design"
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
                >
                  <RadioGroupItem
                    value="design"
                    id="m-design"
                    className="w-5 h-5"
                  />
                  <Label htmlFor="m-design" className="cursor-pointer flex-1">
                    <span className="block">🎨 Design</span>
                    <span className="text-xs text-gray-500">Style</span>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Section 7: Comments */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b-2 border-gray-100">
              <h3 className="text-gray-700">Bemerkungen</h3>
            </div>
            <Textarea
              placeholder="Besondere Wünsche? (max. 250 Zeichen)"
              maxLength={250}
              rows={3}
              className="resize-none"
            />
          </div>

          {/* Submit Button - Fixed at bottom on mobile */}
          <div className="pt-4 pb-2">
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white h-14 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Jetzt reservieren
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
