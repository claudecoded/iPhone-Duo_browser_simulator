import React from 'react';

export default function CustomizerPanel({ config, updateConfig, availableApps }) {
  const wallpapers = [
    { name: 'Abstract Art', url: 'https://unsplash.com' },
    { name: 'Cyberpunk', url: 'https://unsplash.com' },
    { name: 'Minimalist Peak', url: 'https://unsplash.com' }
  ];

  return (
    <div class="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 w-full text-zinc-100">
      <div>
        <h2 class="text-xl font-bold tracking-tight">iPhone Duo Studio</h2>
        <p class="text-xs text-zinc-400 mt-0.5">Customize hardware, geometry, and real apps.</p>
      </div>

      <hr class="border-zinc-800" />

      {/* Hardware Colors section */}
      <div class="flex flex-col gap-2">
        <label class="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Device Color</label>
        <div class="flex gap-3">
          {['#27272a', '#e4e4e7', '#0284c7', '#b91c1c'].map(color => (
            <button
              key={color}
              onClick={() => updateConfig('bodyColor', color)}
              class={`w-8 h-8 rounded-full border-2 transition-transform ${config.bodyColor === color ? 'border-amber-400 scale-110' : 'border-transparent'}`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Geometry Fold Slider section */}
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <label class="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Fold Mechanism Angle</label>
          <span class="text-xs font-mono font-bold text-amber-400">{config.foldAngle}°</span>
        </div>
        <input 
          type="range" 
          min="100" 
          max="180" 
          value={config.foldAngle}
          onChange={(e) => updateConfig('foldAngle', parseInt(e.target.value))}
          class="w-full accent-amber-400 bg-zinc-800 h-2 rounded-lg cursor-pointer"
        />
        <div class="flex justify-between text-[10px] text-zinc-500 font-mono">
          <span>L-Shape Flex</span>
          <span>Flat Flat</span>
        </div>
      </div>

      {/* Wallpaper Switcher section */}
      <div class="flex flex-col gap-2">
        <label class="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Display Wallpaper</label>
        <div class="grid grid-cols-3 gap-2">
          {wallpapers.map(wp => (
            <button
              key={wp.name}
              onClick={() => updateConfig('wallpaper', wp.url)}
              class={`h-14 rounded-lg bg-cover bg-center border-2 transition-all ${config.wallpaper === wp.url ? 'border-amber-400 scale-95 shadow-lg' : 'border-zinc-700'}`}
              style={{ backgroundImage: `url(${wp.url})` }}
              title={wp.name}
            />
          ))}
        </div>
      </div>

      {/* Multitasking Display State Controllers */}
      <div class="flex flex-col gap-3">
        <label class="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Forced App System Routing</label>
        
        <div class="flex flex-col gap-1.5">
          <span class="text-[11px] text-zinc-400 font-medium">Left Screen Module:</span>
          <select 
            value={config.leftApp}
            onChange={(e) => updateConfig('leftApp', e.target.value)}
            class="bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
          >
            {availableApps.map(app => <option key={app.id} value={app.id}>{app.name}</option>)}
          </select>
        </div>

        <div class="flex flex-col gap-1.5">
          <span class="text-[11px] text-zinc-400 font-medium">Right Screen Module:</span>
          <select 
            value={config.rightApp}
            onChange={(e) => updateConfig('rightApp', e.target.value)}
            class="bg-zinc-800 border border-zinc-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
          >
            {availableApps.map(app => <option key={app.id} value={app.id}>{app.name}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
