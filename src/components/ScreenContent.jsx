import React from 'react';
import { Home, Compass, Layers, Cpu, Smartphone } from 'lucide-react';

export default function ScreenContent({ side, currentAppId, config, availableApps, setApp }) {
  const currentApp = availableApps.find(a => a.id === currentAppId);

  // Home Screen Layout
  if (currentAppId === 'home') {
    return (
      <div 
        class="w-full h-full bg-cover bg-center flex flex-col justify-between p-6 relative"
        style={{ backgroundImage: `url(${config.wallpaper})` }}
      >
        {/* Top Status Bar Simulator */}
        <div class="flex justify-between items-center text-xs text-white font-medium drop-shadow-sm px-1">
          <span>{side === 'left' ? '9:41 AM' : '100% 🔋'}</span>
          <div class="flex gap-1 items-center">
            <div class="w-2 h-2 rounded-full bg-white/80" />
            <span class="text-[9px] uppercase tracking-wider">{side} screen</span>
          </div>
        </div>

        {/* App Icons Grid */}
        <div class="grid grid-cols-3 gap-y-6 justify-items-center my-auto">
          {availableApps.filter(app => app.id !== 'home').map(app => (
            <button
              key={app.id}
              onClick={() => setApp(app.id)}
              class="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-transform"
            >
              <div class="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg group-hover:bg-white/20 transition-colors">
                {app.id === 'wikipedia' && <Compass class="w-7 h-7 text-blue-400" />}
                {app.id === 'maps' && <Layers class="w-7 h-7 text-emerald-400" />}
                {app.id === 'calculator' && <Cpu class="w-7 h-7 text-orange-400" />}
                {app.id === 'games' && <Smartphone class="w-7 h-7 text-purple-400" />}
              </div>
              <span class="text-xs text-white font-medium drop-shadow-md text-center line-clamp-1 max-w-[70px]">
                {app.name}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Navigation Dock Accent */}
        <div class="w-full bg-white/20 backdrop-blur-xl h-16 rounded-2xl flex items-center justify-around px-2 border border-white/10">
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/40"><Home class="w-5 h-5"/></div>
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/40"><Compass class="w-5 h-5"/></div>
          <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/40"><Layers class="w-5 h-5"/></div>
        </div>
      </div>
    );
  }

  // Real App Web Render Mode via Iframe
  return (
    <div class="w-full h-full bg-white flex flex-col relative">
      {/* Top Navigation Frame Controls */}
      <div class="bg-zinc-100 border-b border-zinc-200 px-3 py-2 flex items-center justify-between text-zinc-800 text-xs shrink-0">
        <span class="font-mono font-medium truncate max-w-[180px]">{currentApp.name}</span>
        <button 
          onClick={() => setApp('home')}
          class="bg-zinc-200 hover:bg-zinc-300 px-2.5 py-1 rounded-md text-zinc-700 font-medium transition-colors"
        >
          Exit App
        </button>
      </div>
      
      {/* App Body Frame */}
      <div class="w-full flex-1 bg-white relative">
        <iframe 
          src={currentApp.url} 
          title={currentApp.name}
          class="w-full h-full border-none"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          loading="lazy"
        />
      </div>
    </div>
  );
}
