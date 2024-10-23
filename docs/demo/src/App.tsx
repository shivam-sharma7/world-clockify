import React, { useState } from 'react';
import { formatDateInTimeZone, getSupportedTimezones } from 'world-clockify';
import './App.css'

const App: React.FC = () => {
  const [currentDate] = useState(new Date().toISOString());
  const [fromZone, setFromZone] = useState('America/New_York');
  const [toZone, setToZone] = useState('Asia/Kolkata');
  const [formattedDate, setFormattedDate] = useState('');

  const format = 'yyyy-MM-dd HH:mm:ss';

  const handleConvert = () => {
    const formatted = formatDateInTimeZone(currentDate, fromZone, toZone, format);
    setFormattedDate(formatted);
  };

  return (
    <div className="App">
      <h1>World Clockify React Integration</h1>
      
      <div>
        <label className='lbl'>From Timezone:</label>
        <select value={fromZone} onChange={(e) => setFromZone(e.target.value)}>
          {getSupportedTimezones().map((zone) => (
            <option key={zone} value={zone}>{zone}</option>
          ))}
        </select>
      </div>

      <div>
        <label className='lbl'>To Timezone:</label>
        <select value={toZone} onChange={(e) => setToZone(e.target.value)}>
          {getSupportedTimezones().map((zone) => (
            <option key={zone} value={zone}>{zone}</option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}>Convert</button>

      {formattedDate && (
        <div>
          <h2>Converted Date:</h2>
          <p>{formattedDate}</p>
        </div>
      )}
      </div>
  
  );
};

export default App;
