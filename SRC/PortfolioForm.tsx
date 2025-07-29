import React, { useState } from 'react';

const PortfolioForm = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {!submitted ? (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          <label>Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
          <label>Bio:</label><br />
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} /><br /><br />
          <button type="submit">Generate Portfolio</button>
        </form>
      ) : (
        <div>
          <h2>{name}</h2>
          <p>{bio}</p>
          <button onClick={() => setSubmitted(false)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PortfolioForm;
