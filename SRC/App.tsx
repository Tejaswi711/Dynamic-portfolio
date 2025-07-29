import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPortfolio(true);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1> Dynamic Portfolio Generator</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '300px', padding: '8px' }}
          />
        </div>
        <br />
        <div>
          <label>Bio:</label><br />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            style={{ width: '300px', height: '100px', padding: '8px' }}
          />
        </div>
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>Generate Portfolio</button>
      </form>

      {showPortfolio && (
        <div style={{ border: '1px solid #ccc', padding: '20px', width: '320px' }}>
          <h2>{name}</h2>
          <p>{bio}</p>
        </div>
      )}
    </div>
  );
}

export default App;

