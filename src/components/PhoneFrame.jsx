import React from 'react';
import ScreenContent from './ScreenContent';

export default function PhoneFrame({ config, availableApps, updateConfig }) {
  // Dynamic calculation for 3D fold perspective
  const leftRotation = config.foldAngle < 180 ? `rotateY(${(180 - config.foldAngle) / 2}deg)` : 'rotateY(0deg)';
  const rightRotation = config.foldAngle < 180 ? `rotateY(-${(180 - config.foldAngle) / 2}deg)` : 'rotateY(0deg)';

  return (
    <div class="relative py-12 px-6 flex items-center justify-center select-none" style={{ perspective: '1500px' }}>
      
      {/* Container Device Wrappers */}
      <div class="flex items-center transition-all duration-500 ease-out" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* LEFT PANEL */}
        <div 
          class="w-[360px] h-[740px] rounded-l-[36px] p-3 border-4 border-r-0 relative transition-transform duration-300 ease-out"
          style={{ 
            backgroundColor: config.bodyColor,
            borderColor: '#18181b',
            transform: leftRotation,
            transformOrigin: 'right center',
            boxShadow: '-10px 20px 30px rgba(0,0,0,0.5)'
          }}
        >
          <div class="w-full h-full rounded-[26px] overflow-hidden relative border border-black/40">
            <ScreenContent 
              side="left" 
              currentAppId={config.leftApp} 
              config={config} 
              availableApps={availableApps} 
              setApp={(appId) => updateConfig('leftApp', appId)} 
            />
          </div>
        </div>

        {/* PHYSICAL HINGE MECHANISM */}
        <div 
          class="w-[8px] h-[720px] z-50 shadow-inner transition-colors duration-300 relative"
          style={{ 
            backgroundColor: config.hingeColor,
            boxShadow: 'inset 2px 0 3px rgba(0,0,0,0.4), inset -2px 0 3px rgba(255,255,255,0.2)'
          }}
        />

        {/* RIGHT PANEL */}
        <div 
          class="w-[360px] h-[740px] rounded-r-[36px] p-3 border-4 border-l-0 relative transition-transform duration-300 ease-out"
          style={{ 
            backgroundColor: config.bodyColor,
            borderColor: '#18181b',
            transform: rightRotation,
            transformOrigin: 'left center',
            boxShadow: '10px 20px 30px rgba(0,0,0,0.5)'
          }}
        >
          <div class="w-full h-full rounded-[26px] overflow-hidden relative border border-black/40">
            <ScreenContent 
              side="right" 
              currentAppId={config.rightApp} 
              config={config} 
              availableApps={availableApps} 
              setApp={(appId) => updateConfig('rightApp', appId)} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
