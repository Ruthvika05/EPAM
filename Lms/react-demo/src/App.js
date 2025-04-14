import React, { useState } from 'react';
import Button from './Button';  // Reusable Component

function App() {
  const [bgColor, setBgColor] = useState('lightgreen');  // Start with green

  const toggleColor = () => {
    setBgColor(bgColor === 'lightgreen' ? 'yellow' : 'lightgreen');  // Toggle between green and yellow
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '1rem', minHeight: '100vh' }}>
      <h1>ReactJS,Properties,Components,and Events</h1>
      <Button toggleColor={toggleColor} />
    </div>
  );
}

export default App;
