import React, { useState } from 'react';
import { X, Navigation, Compass, Radio, MapPin, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export default function InteractiveMapModal({ isOpen, onClose }) {
  const [startNode, setStartNode] = useState('A');
  const [endNode, setEndNode] = useState('F');
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  const nodes = [
    { id: 'A', name: 'Main Campus Entrance', x: 15, y: 75, type: 'entry' },
    { id: 'B', name: 'Student Lounge Hub', x: 35, y: 60, type: 'amenity' },
    { id: 'C', name: 'Computer Science Lab 3', x: 45, y: 25, type: 'lab' },
    { id: 'D', name: 'Central Quad & Library', x: 65, y: 70, type: 'library' },
    { id: 'E', name: 'Innovation Cafe', x: 75, y: 40, type: 'amenity' },
    { id: 'F', name: 'Advanced Research Wing', x: 88, y: 20, type: 'research' },
  ];

  // Precomputed edges / graph paths for Dijkstra simulation
  const graphPaths = {
    'A-F': { path: ['A', 'B', 'C', 'F'], distance: '145m', estTime: '1.8 mins', steps: [
      'Start at Main Campus Entrance (BLE Beacon B-101 connected)',
      'Head East past Student Lounge Hub (Node B)',
      'Turn North toward Computer Science Lab 3 (Node C)',
      'Arrive at Advanced Research Wing (Node F)'
    ]},
    'A-E': { path: ['A', 'B', 'D', 'E'], distance: '120m', estTime: '1.5 mins', steps: [
      'Start at Main Campus Entrance',
      'Walk along Central Corridor to Student Lounge Hub',
      'Cross Central Quad toward Library',
      'Turn North-East to Innovation Cafe'
    ]},
    'B-F': { path: ['B', 'C', 'F'], distance: '95m', estTime: '1.2 mins', steps: [
      'Start at Student Lounge Hub',
      'Proceed directly North to CS Lab 3',
      'Continue straight into Advanced Research Wing'
    ]},
    'default': { path: ['A', 'B', 'C', 'E', 'F'], distance: '160m', estTime: '2.0 mins', steps: [
      'Calculating dynamic shortest path via Spring Boot Dijkstra Engine...',
      'Following active BLE beacon signals...',
      'Destination reached!'
    ]}
  };

  const key = `${startNode}-${endNode}`;
  const currentRoute = graphPaths[key] || {
    path: [startNode, 'B', 'D', endNode],
    distance: '135m',
    estTime: '1.6 mins',
    steps: [
      `Departing from Node ${startNode}`,
      'BLE beacon triangulation synced',
      'Navigating via optimal corridor path',
      `Arrived at Node ${endNode}`
    ]
  };

  const handleSimulate = () => {
    setIsCalculating(true);
    setActiveStep(0);
    setTimeout(() => {
      setIsCalculating(false);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl bg-[#0D0F18] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400">
              <Navigation className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <span>Navisphere Indoor Route Engine</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Interactive Demo
                </span>
              </h3>
              <p className="text-xs text-gray-400 font-mono">
                Spring Boot Dijkstra Shortest-Path & BLE Triangulation Engine
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto">
          {/* Map View Canvas Simulation */}
          <div className="lg:col-span-7 bg-[#08090F] border border-white/10 rounded-xl p-4 relative min-h-[300px] flex flex-col justify-between overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

            {/* BLE Signal Pulse overlay */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>BLE Beacon Array Active</span>
            </div>

            {/* Floorplan visual SVG */}
            <div className="relative w-full h-[260px] my-auto">
              <svg className="w-full h-full">
                {/* Floor Plan outline walls */}
                <rect x="5%" y="10%" width="90%" height="80%" rx="12" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="6 4" />
                
                {/* Connecting Graph Edges */}
                <line x1="15%" y1="75%" x2="35%" y2="60%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="35%" y1="60%" x2="45%" y2="25%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="35%" y1="60%" x2="65%" y2="70%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="45%" y1="25%" x2="88%" y2="20%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="65%" y1="70%" x2="75%" y2="40%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <line x1="75%" y1="40%" x2="88%" y2="20%" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />

                {/* Highlight Active Calculated Route Edge */}
                {!isCalculating && (
                  <path
                    d={`M ${nodes.find(n => n.id === currentRoute.path[0]).x}% ${nodes.find(n => n.id === currentRoute.path[0]).y}% ` +
                       currentRoute.path.slice(1).map(id => {
                         const n = nodes.find(x => x.id === id);
                         return `L ${n.x}% ${n.y}%`;
                       }).join(' ')}
                    fill="none"
                    stroke="#E5C158"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_8px_rgba(229,193,88,0.8)] transition-all duration-500"
                  />
                )}

                {/* Nodes */}
                {nodes.map((node) => {
                  const isInPath = currentRoute.path.includes(node.id);
                  const isStart = node.id === startNode;
                  const isEnd = node.id === endNode;

                  return (
                    <g key={node.id} className="cursor-pointer" onClick={() => setEndNode(node.id)}>
                      {/* Outer Beacon Ring */}
                      {(isStart || isEnd) && (
                        <circle
                          cx={`${node.x}%`}
                          cy={`${node.y}%`}
                          r="14"
                          fill="none"
                          stroke={isStart ? '#10B981' : '#E5C158'}
                          strokeWidth="1.5"
                          className="animate-ping opacity-75"
                        />
                      )}

                      {/* Core Node Circle */}
                      <circle
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="10"
                        fill={isStart ? '#10B981' : isEnd ? '#E5C158' : isInPath ? '#3B82F6' : '#1F2937'}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />

                      {/* Node Text Label */}
                      <text
                        x={`${node.x}%`}
                        y={`${node.y + (node.y > 50 ? 12 : -8)}%`}
                        textAnchor="middle"
                        fill={isStart || isEnd ? '#F59E0B' : '#9CA3AF'}
                        fontSize="10"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        {node.id}: {node.name.split(' ')[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Map Legend Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-gray-400">
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Start (BLE Origin)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  <span>Target Destination</span>
                </span>
              </div>
              <span className="text-gray-400">Click any node on map to retarget</span>
            </div>
          </div>

          {/* Controls & Guidance Steps */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Route Selector Controls */}
            <div className="glass-panel p-4 rounded-xl space-y-3">
              <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                1. Select Route Parameters
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-400 font-mono mb-1">Start Node</label>
                  <select
                    value={startNode}
                    onChange={(e) => setStartNode(e.target.value)}
                    className="w-full bg-[#161926] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    {nodes.map(n => (
                      <option key={n.id} value={n.id}>{n.id} - {n.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-gray-400 font-mono mb-1">Destination</label>
                  <select
                    value={endNode}
                    onChange={(e) => setEndNode(e.target.value)}
                    className="w-full bg-[#161926] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                  >
                    {nodes.map(n => (
                      <option key={n.id} value={n.id}>{n.id} - {n.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleSimulate}
                disabled={startNode === endNode}
                className="w-full py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center space-x-2 shadow-[0_0_12px_rgba(229,193,88,0.2)] disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isCalculating ? 'Computing Shortest Path...' : 'Run Dijkstra Algorithm'}</span>
              </button>
            </div>

            {/* Calculated Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                <span className="block text-[10px] text-gray-400 font-mono uppercase">Path Distance</span>
                <span className="text-lg font-bold text-white font-mono">{currentRoute.distance}</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-center">
                <span className="block text-[10px] text-gray-400 font-mono uppercase">Est. Walk Time</span>
                <span className="text-lg font-bold text-amber-300 font-mono">{currentRoute.estTime}</span>
              </div>
            </div>

            {/* Step-by-Step Guidance */}
            <div className="glass-panel p-4 rounded-xl flex-1 flex flex-col justify-between">
              <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Turn-by-Turn Navigation</span>
                <span className="text-[10px] text-amber-400">{currentRoute.path.length} Waypoints</span>
              </h4>

              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {currentRoute.steps.map((step, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-2 rounded-lg text-xs font-sans border transition-all cursor-pointer flex items-start space-x-2 ${
                      activeStep === idx
                        ? 'bg-amber-400/15 border-amber-400/40 text-amber-200'
                        : 'bg-white/5 border-transparent text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
