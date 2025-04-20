'use client';
import React, { useState } from 'react';

export default function MobileDemo() {
  const [destination, setDestination] = useState('');
  const [favorites] = useState(['123 HCI Road', 'Tesla HQ', 'Home']);
  const [voiceDest, setVoiceDest] = useState('');
  const [showMicModal, setShowMicModal] = useState(false);

  const [audioSource, setAudioSource] = useState('Radio');
  const [volume, setVolume] = useState(50);

  const [climatePreset, setClimatePreset] = useState('');
  const [driverTemp, setDriverTemp] = useState(70);
  const [passengerTemp, setPassengerTemp] = useState(70);

  const [trunkOpen, setTrunkOpen] = useState(false);
  const [seatsFolded, setSeatsFolded] = useState(false);
  const [locked, setLocked] = useState(false);

  const handleMic = (type) => {
    setShowMicModal(true);
    setTimeout(() => {
      if (type === 'destination') setVoiceDest('123 HCI Road');
      if (type === 'trunk') setTrunkOpen(true);
      setShowMicModal(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-xl font-bold mb-4">📱 Tesla App Interactive Prototype</h1>

      <div className="w-[375px] h-[720px] bg-zinc-900 rounded-[2rem] shadow-xl p-4 overflow-y-scroll space-y-10 border border-zinc-700">

        {/* Set Destination */}
        <div>
          <h2 className="text-lg font-semibold mb-2">🗺️ Set Destination</h2>
          <input
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 text-sm border border-zinc-600 mb-2"
            placeholder="Enter address..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button
            onClick={() => alert(`Set to: ${destination}`)}
            className="w-full bg-blue-600 py-2 rounded-lg mb-2"
          >
            Confirm
          </button>
          <div className="space-y-1 text-sm text-zinc-300 mb-2">
            <p className="underline">Favorites:</p>
            {favorites.map((fav, i) => (
              <button
                key={i}
                onClick={() => setDestination(fav)}
                className="block text-left w-full hover:text-white"
              >
                • {fav}
              </button>
            ))}
          </div>
          <button
            onClick={() => handleMic('destination')}
            className="w-full bg-zinc-700 py-2 rounded-lg"
          >
            🎤 Use Voice
          </button>
          {voiceDest && <p className="text-green-400 text-sm mt-1">Voice Set: {voiceDest}</p>}
        </div>

        {/* Audio Control */}
        <div>
          <h2 className="text-lg font-semibold mb-2">🎧 Audio Control</h2>
          <select
            className="w-full rounded-lg px-3 py-2 bg-zinc-800 mb-2"
            value={audioSource}
            onChange={(e) => setAudioSource(e.target.value)}
          >
            <option>Radio</option>
            <option>Bluetooth</option>
            <option>CD</option>
          </select>

          <div className="bg-zinc-800 p-4 rounded-lg space-y-2">
            <p className="text-sm">
              Now Playing: {audioSource === 'Radio' ? 'Chill FM' : audioSource === 'Bluetooth' ? 'Phone Audio' : 'CD – Track 2'}
            </p>
            <div className="flex justify-around text-lg">
              {audioSource === 'Radio' && (<><button>⏮️</button><button>▶️</button><button>⏭️</button></>)}
              {audioSource === 'Bluetooth' && <button className="text-2xl">⏸️</button>}
              {audioSource === 'CD' && <div className="text-xl">💿</div>}
            </div>

            <div className="mt-3">
              <label className="block text-sm">Volume: {volume}</label>
              <input
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Climate Control */}
        <div>
          <h2 className="text-lg font-semibold mb-2">❄️ Climate Control</h2>
          <div className="flex justify-between mb-2 text-sm">
            <div>
              <label>Driver: {driverTemp}°</label>
              <input
                type="range"
                min={60}
                max={80}
                value={driverTemp}
                onChange={(e) => setDriverTemp(e.target.value)}
              />
            </div>
            <div>
              <label>Passenger: {passengerTemp}°</label>
              <input
                type="range"
                min={60}
                max={80}
                value={passengerTemp}
                onChange={(e) => setPassengerTemp(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            {['Eco', 'Comfort', 'Max Cool'].map((preset) => (
              <button
                key={preset}
                onClick={() => setClimatePreset(preset)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  climatePreset === preset ? 'bg-blue-600' : 'bg-zinc-700'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Seating & Storage */}
        <div>
          <h2 className="text-lg font-semibold mb-2">🪑 Seating & Storage</h2>
          <button
            onClick={() => setSeatsFolded(!seatsFolded)}
            className="w-full bg-zinc-700 py-2 rounded-lg mb-2"
          >
            {seatsFolded ? '✅ Seats Folded' : 'Fold Seats'}
          </button>
          <button
            onClick={() => setTrunkOpen(!trunkOpen)}
            className="w-full bg-blue-600 py-2 rounded-lg mb-2"
          >
            {trunkOpen ? '✅ Trunk Opened' : 'Open Trunk'}
          </button>
          <button
            onClick={() => setLocked(!locked)}
            className="w-full bg-zinc-700 py-2 rounded-lg"
          >
            {locked ? '🔒 Vehicle Locked' : '🔓 Unlock Vehicle'}
          </button>
        </div>
      </div>

      {/* Voice Mic Modal */}
      {showMicModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-8 rounded-2xl text-center">
            <p className="text-white text-lg mb-4">🎤 Listening...</p>
            <div className="animate-ping w-12 h-12 rounded-full bg-blue-500 mx-auto" />
          </div>
        </div>
      )}
    </main>
  );
}