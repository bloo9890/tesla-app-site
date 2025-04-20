'use client';
import React, { useState } from 'react';

export default function Home() {
  // === React state for Deliverable 5 interactivity ===
  const [destination, setDestination] = useState('');
  const [destinationLabel, setDestinationLabel] = useState('');
  const [audioSource, setAudioSource] = useState('Radio');
  const [volume, setVolume] = useState(50);
  const [driverTemp, setDriverTemp] = useState(70);
  const [passengerTemp, setPassengerTemp] = useState(70);
  const [seatStatus, setSeatStatus] = useState('');
  const [trunkStatus, setTrunkStatus] = useState('');
  const [voiceStorageStatus, setVoiceStorageStatus] = useState('');

  return (
    <main className="px-6 py-10 max-w-6xl mx-auto space-y-12 scroll-smooth">

      {/* Nav Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md py-4 px-4 mb-10 rounded-xl">
        <ul className="flex flex-wrap justify-center gap-6 text-blue-700 font-semibold text-sm sm:text-base">
          <li><a href="#d1" className="hover:underline">Deliverable 1</a></li>
          <li><a href="#d2" className="hover:underline">Deliverable 2</a></li>
          <li><a href="#d3" className="hover:underline">Deliverable 3</a></li>
          <li><a href="#d4" className="hover:underline">Deliverable 4</a></li>
          <li><a href="#d5" className="hover:underline">Deliverable 5</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">Tesla Self-Driving Vehicle Mobile App</h1>
        <p className="text-lg text-gray-600">An innovative mobile interface replacing the traditional dashboard, enabling users to control their self-driving Tesla vehicle entirely through an app.</p>
        <p className="text-sm text-gray-400">By Marcus La-Anyane – Spring 2025</p>
      </section>

      {/* Deliverable 1 */}
      <section id="d1">
  <h2 className="text-3xl font-bold mb-4 text-blue-800">Deliverable 1: Initial App Requirements</h2>
  <div className="bg-white border-l-4 border-blue-500 p-6 rounded-xl shadow-md space-y-6">

    <p className="text-gray-700">
      Based on the product brief from Tesla, we outlined the app’s initial core functions. These requirements were used as a foundation for the first prototype and were later refined through user interviews and usability testing.
    </p>

    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">1. Set Destination</h3>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Type destination manually using search bar</li>
          <li>Select from a map or use recent history</li>
          <li>Voice input for hands-free control</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">2. Control Audio System</h3>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Select music source: radio, Bluetooth, USB</li>
          <li>Basic playback: play/pause, skip, previous</li>
          <li>Volume control via slider</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">3. Climate Control</h3>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Adjust temperature for driver and passenger</li>
          <li>Manual fan speed and vent direction</li>
          <li>Auto climate toggle</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">4. Seating and Storage Access</h3>
        <ul className="list-disc list-inside text-gray-700 ml-4">
          <li>Open/close trunk and frunk</li>
          <li>Fold or adjust seats remotely</li>
          <li>Lock and unlock doors</li>
        </ul>
      </div>
    </div>

    <p className="text-gray-500 italic pt-2">
      These requirements provided the foundation for our initial prototype in Deliverable 3, and were updated based on user feedback in Deliverables 2 and 4.
    </p>
  </div>
</section>

      {/* Deliverable 2 */}
      <section id="d2">
  <h2 className="text-3xl font-bold mb-4 text-green-700">Deliverable 2: User Research & Updated Requirements</h2>
  <div className="bg-white border-l-4 border-green-500 p-6 rounded-xl shadow-md space-y-6">

    <p className="text-gray-700">
      We interviewed three potential Tesla users from diverse demographics living in Woodbridge, VA. Each participant represented a different user group, allowing us to better understand expectations around comfort, usability, and control in a fully app-driven self-driving car.
    </p>

    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">User Personas Interviewed</h3>
      <ul className="list-disc list-inside text-gray-700 ml-4">
        <li><strong>Emily Tran</strong> – 29, software engineer, early tech adopter, wants advanced voice control</li>
        <li><strong>Carlos Hernandez</strong> – 51, rideshare driver, values efficiency and intuitive interfaces</li>
        <li><strong>Janet Robinson</strong> – 63, retired teacher, prefers comfort and simplified layouts</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Goals</h3>
      <ul className="list-disc list-inside text-gray-700 ml-4">
        <li>Understand expectations from a self-driving car app</li>
        <li>Identify barriers to quick interaction while in transit</li>
        <li>Explore which features need greater visual clarity</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Insights</h3>
      <ul className="list-disc list-inside text-gray-700 ml-4">
        <li><strong>Destination:</strong> Typing addresses each time felt tedious; users wanted favorites, history, and predictive input</li>
        <li><strong>Audio:</strong> Needed large, simple controls and clearer volume feedback</li>
        <li><strong>Climate:</strong> Sliders were okay, but presets like “Eco” or “Comfort” were more appealing</li>
        <li><strong>Seating & Storage:</strong> Icons alone weren’t enough—confirmation messages or labeled buttons were preferred</li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Updated Requirements</h3>
      <ul className="list-disc list-inside text-gray-700 ml-4">
        <li>🗺️ Add a “Favorites” tab + recently used destinations list</li>
        <li>🔊 Increase button size and add feedback animation for volume controls</li>
        <li>❄️ Add 1-tap “Smart Climate” presets (Eco, Comfort, Max Cool)</li>
        <li>🪑 Replace ambiguous seat/trunk icons with labeled buttons and confirmation modals</li>
      </ul>
    </div>

    <div>
  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sample Interview Prompts</h3>
  <ul className="list-disc list-inside text-gray-700 ml-4">
    <li>&quot;How would you want to set a destination during your daily commute?&quot;</li>
    <li>&quot;If you were controlling music on the go, what would help you stay focused?&quot;</li>
    <li>&quot;Do you prefer automatic climate settings or customizing them each time?&quot;</li>
    <li>&quot;Would you feel comfortable unlocking or opening your vehicle through an app?&quot;</li>
  </ul>
</div>
    <p className="text-sm text-gray-500 italic pt-2">
      These findings directly informed changes in Deliverables 3–5, shifting our app toward faster interactions and clearer visuals.
    </p>
  </div>
</section>

      {/* Deliverable 3 */}
      <section id="d3">
  <h2 className="text-3xl font-bold mb-4 text-purple-700">Deliverable 3: Initial Design & Prototype</h2>
  <div className="bg-white border-l-4 border-purple-500 p-6 rounded-xl shadow-md space-y-6">

    <p className="text-gray-700">
      Using feedback from our user interviews, we developed a working prototype that includes all four core functions. Each function supports both a primary and an alternate flow, reflecting real-world usage scenarios.
    </p>

    <ul className="list-disc list-inside text-gray-700">
      <li><strong>Set Destination:</strong> Enter manually or select from history</li>
      <li><strong>Control Audio:</strong> Change music source + adjust volume</li>
      <li><strong>Climate Control:</strong> Manual settings + “Auto Mode”</li>
      <li><strong>Seating/Storage:</strong> Tap controls for trunk + seats</li>
    </ul>

    {/* Interactive Walkthrough */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Interactive Prototype Demo</h3>
      <p className="text-gray-700">
        The embedded interface below simulates all 8 user flows (2 per function). This version reflects our first implementation of updated UI ideas like Favorites, large buttons, and early Smart Climate.
      </p>
      <iframe
        src="/mobile-demo"
        className="w-full h-[720px] rounded-2xl border border-gray-300 shadow-lg"
      ></iframe>
      <p className="text-sm text-gray-500 mt-2">
        Click and interact with the simulation above. Supports destination entry, media switching, fan/temperature changes, and trunk/seat toggles.
      </p>
    </div>

    {/* Walkthrough Video */}
    <div>
      <h3 className="text-xl font-semibold mb-2">8-Flow Walkthrough Video</h3>
      <video
        controls
        src="/tesla-demo-walkthrough.mp4"
        className="w-full rounded-xl border"
      >
        Your browser does not support the video tag.
      </video>
      <p className="text-sm text-gray-500 mt-2">
        This video demonstration walks through 2 flows each for: setting a destination, controlling audio, adjusting climate, and managing seating/storage.
      </p>
    </div>

    {/* What Still Needed Improvement */}
    <div>
      <h3 className="text-xl font-semibold mb-2">What Needed Refinement (From Testing)</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>“Auto Mode” unclear to some users (needed rebranding)</li>
        <li>Volume control worked, but lacked visual feedback</li>
        <li>Some icons caused confusion for seat vs. trunk toggles</li>
        <li>Users wanted predictive suggestions when typing addresses</li>
      </ul>
    </div>

    <p className="text-sm text-gray-500 italic pt-2">
      These learnings were addressed in the refined version presented in Deliverable 5.
    </p>
  </div>
</section>

      {/* Deliverable 4 */}
      <section id="d4">
  <h2 className="text-3xl font-bold mb-4 text-green-700">Deliverable 4: Usability Testing</h2>
  <div className="bg-white border-l-4 border-green-500 p-6 rounded-xl shadow-md space-y-6 text-gray-800">

    <p>
      After developing the initial prototype, we conducted usability tests with three participants from different user groups in Woodbridge, VA. Each session lasted between 30–45 minutes and involved completing realistic in-app tasks.
    </p>

    {/* Study Tasks */}
    <div>
      <h3 className="text-xl font-semibold mb-2">✅ Study Tasks</h3>
      <ul className="list-disc list-inside">
        <li>Set a destination using both typing and voice</li>
        <li>Switch audio source and adjust the volume</li>
        <li>Adjust both climate zones and use Smart Climate</li>
        <li>Fold the seats and open the trunk using voice</li>
        <li>Test lock/unlock functionality</li>
      </ul>
    </div>

    {/* Demographics Table */}
    <div>
      <h3 className="text-xl font-semibold mb-2">👤 Participant Demographics</h3>
      <table className="w-full text-sm border border-gray-300 rounded overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Age</th>
            <th className="border p-2 text-left">Occupation</th>
            <th className="border p-2 text-left">User Type</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Emily Tran</td><td className="border p-2">29</td><td className="border p-2">Software Engineer</td><td className="border p-2">Tech-savvy commuter</td></tr>
          <tr><td className="border p-2">Carlos Hernandez</td><td className="border p-2">51</td><td className="border p-2">Rideshare Driver</td><td className="border p-2">Efficiency-focused user</td></tr>
          <tr><td className="border p-2">Janet Robinson</td><td className="border p-2">63</td><td className="border p-2">Retired Teacher</td><td className="border p-2">Simplicity-first user</td></tr>
        </tbody>
      </table>
    </div>

    {/* Learnings */}
    <div>
      <h3 className="text-xl font-semibold mb-2">📌 Key Learnings</h3>
      <ul className="list-disc list-inside">
        <li><strong>Favorites tab:</strong> Loved by all users, helped speed up navigation</li>
        <li><strong>Volume slider:</strong> Needed feedback animation — fixed in D5</li>
        <li><strong>Climate presets:</strong> “Auto” was unclear, “Smart Climate” worked better</li>
        <li><strong>Trunk access:</strong> Users wanted both voice + tap — added in D5</li>
        <li><strong>Lock/Unlock:</strong> Requested by all testers — added as a final feature</li>
      </ul>
    </div>

    {/* Design Changes */}
    <div>
      <h3 className="text-xl font-semibold mb-2">🎨 Design Changes Implemented</h3>
      <ul className="list-disc list-inside">
        <li>Renamed “Auto Mode” to “Smart Climate”</li>
        <li>Added animations to volume slider and buttons</li>
        <li>Enabled both voice + tap for trunk and seat controls</li>
        <li>Added lock/unlock UI in Seating & Storage</li>
      </ul>
    </div>

    {/* Test Script */}
    <div>
      <h3 className="text-xl font-semibold mb-2">🧪 Testing Script Summary</h3>
      <ul className="list-disc list-inside">
        <li>Intro to prototype and task overview</li>
        <li>Participants completed each task without help</li>
        <li>Observed interaction, timing, and confusion points</li>
        <li>Ended with feedback session and improvement suggestions</li>
      </ul>
    </div>
  </div>
</section>

      {/* Deliverable 5 */}
      <section id="d5" className="space-y-6">
  <h2 className="text-3xl font-bold mb-4 text-indigo-700">Deliverable 5: Final High-Fidelity Prototype & Presentation</h2>
  <div className="bg-white border-l-4 border-indigo-500 p-6 rounded-xl shadow-md space-y-6 text-gray-800">

    <p>
      This final version of the Tesla mobile app includes real-time interactive components such as embedded map feedback, working climate/audio controls, and simulated voice-triggered trunk and seat toggles—all embedded below.
    </p>

    <div className="bg-black text-white w-full max-w-[375px] mx-auto rounded-[2rem] border border-gray-700 p-4 space-y-6">
      <div className="text-center font-bold text-lg mb-4">📱 Tesla Mobile UI Demo</div>

      {/* Destination Input */}
      <div>
        <h3 className="text-lg font-semibold">🗺️ Set Destination</h3>
        <input
          className="w-full p-2 rounded bg-zinc-800 border border-gray-600 mb-2"
          placeholder="Type destination..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button
          onClick={() => setDestinationLabel(`Destination set: ${destination}`)}
          className="w-full bg-blue-600 py-2 rounded mb-2"
        >
          Confirm
        </button>
        <button
          onClick={() => setDestinationLabel('Destination set: 123 HCI Road, Scienceville, MD')}
          className="w-full bg-zinc-700 py-2 rounded"
        >
          🎤 Use Voice
        </button>
        <p className="text-sm text-green-400 mt-2">{destinationLabel}</p>
        <iframe
          className="mt-3 w-full h-40 rounded-lg"
          src="https://www.google.com/maps?q=123+HCI+Road,+Scienceville,+MD&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Audio Control */}
      <div>
        <h3 className="text-lg font-semibold">🎧 Audio Control</h3>
        <select
          className="w-full bg-zinc-800 text-white rounded p-2 mb-2"
          value={audioSource}
          onChange={(e) => setAudioSource(e.target.value)}
        >
          <option>Radio</option>
          <option>Bluetooth</option>
          <option>CD</option>
        </select>
        <div className="bg-zinc-800 p-3 rounded">
          <p className="text-sm">Now Playing from: {audioSource}</p>
          <div className="flex justify-between mt-2 text-lg">
            <button onClick={() => alert('⏮️ Previous track')}>⏮️</button>
            <button onClick={() => alert('▶️ Playing')}>▶️</button>
            <button onClick={() => alert('⏭️ Next track')}>⏭️</button>
          </div>
          <label className="block mt-4 text-sm">Volume</label>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
          <p className="text-sm mt-1">Volume: {volume}</p>
        </div>
      </div>

      {/* Climate Control */}
      <div>
        <h3 className="text-lg font-semibold">❄️ Climate Control</h3>
        <div className="flex justify-between text-sm mb-2">
          <div>
            <label>Driver: {driverTemp}°</label>
            <input
              type="range"
              min="60"
              max="80"
              value={driverTemp}
              onChange={(e) => setDriverTemp(e.target.value)}
            />
          </div>
          <div>
            <label>Passenger: {passengerTemp}°</label>
            <input
              type="range"
              min="60"
              max="80"
              value={passengerTemp}
              onChange={(e) => setPassengerTemp(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <button className="bg-zinc-700 px-3 py-1 rounded">Eco</button>
          <button className="bg-zinc-700 px-3 py-1 rounded">Comfort</button>
          <button className="bg-zinc-700 px-3 py-1 rounded">Arctic</button>
        </div>
      </div>

      {/* Storage & Seating */}
      <div>
        <h3 className="text-lg font-semibold">🧳 Seating & Storage</h3>
        <button
          onClick={() => setSeatStatus('Seats Folded ✅')}
          className="w-full bg-zinc-700 py-2 rounded mb-2"
        >
          Fold Seats
        </button>
        <button
          onClick={() => setTrunkStatus('Trunk Opened ✅')}
          className="w-full bg-blue-600 py-2 rounded mb-2"
        >
          Open Trunk
        </button>
        <button
          onClick={() => setVoiceStorageStatus('Voice command received: Trunk opened 🎤')}
          className="w-full bg-zinc-700 py-2 rounded"
        >
          🎤 Voice Command
        </button>
        <p className="text-green-400 text-sm mt-2">{seatStatus}</p>
        <p className="text-green-400 text-sm">{trunkStatus}</p>
        <p className="text-green-400 text-sm">{voiceStorageStatus}</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-10 border-t pt-6">
        <p>Marcus La-Anyane – IT Capstone – George Mason University – Spring 2025</p>
      </footer>
    </main>
  );
}