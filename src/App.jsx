import React, { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import CustomizerPanel from './components/CustomizerPanel';

export default function App() {
  // Global customization configuration states
  const [config, setConfig] = useState({
    bodyColor: '#27272a', // zinc-800
    hingeColor: '#a1a1aa', // zinc-400
    wallpaper: 'https://unsplash.com',
    leftApp: 'home',
    rightApp: 'home',
    isFolded: false,
    foldAngle: 180, // Degrees (180 flat, 90 L-shape, 0 closed)
  });

  // Pre-configured "real" applications available to open in iframe
  const availableApps = [
    { id: 'home', name: 'Home Screen', url: null },
    { id: 'wikipedia', name: 'Wikipedia', url: 'https://wikipedia.org' },
    { id: 'maps', name: 'OpenStreetMap', url: 'https://openstreetmap.org' },
    { id: 'calculator', name: 'Online Calc', url: 'https://desmos.com' },
    { id: 'games', name: '2048 Game', url: 'https://play2048.co' }
  ];

  const updateConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div class="min-h-screen w-screen flex flex-col lg:flex-row items-center justify-center p-6 gap-8 overflow-y-auto">
      <div class="flex-1 flex justify-center items-center">
        <PhoneFrame config={config} availableApps={availableApps} updateConfig={updateConfig} />
      </div>
      <div class="w-full lg:w-96 shrink-0">
        <CustomizerPanel config={config} updateConfig={updateConfig} availableApps={availableApps} />
      </div>
    </div>
  );
}
