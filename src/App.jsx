import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#000000");

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen" 
      style={{ backgroundColor: color }}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎨 Color Picker
        </h1>
        <input 
          type="color" 
          value={color} 
          onChange={(e) => setColor(e.target.value)} 
          className="w-24 h-24 cursor-pointer border-none outline-none mb-4"
        />
        <p className="text-lg font-medium text-gray-600 mb-6">
          Selected Color: <span className="font-bold" style={{ color }}>{color}</span>
        </p>
        <button 
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => setColor("#ffffff")}
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}

export default App;
