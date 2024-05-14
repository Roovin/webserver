// pages/index.js

import React, { useState } from 'react';

const IndexPage = () => {
  const [url, setUrl] = useState('');
  const [errorCount, setErrorCount] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // console.log(url);
    //     const response = await fetch(url);
    //   const html = await response.text();
      const response = await fetch(`/api/check404?url=${encodeURIComponent(url)}`);
      const data = await response.json();
      console.log(data);
      setErrorCount(data.errorCount);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <h1>Check 404 Pages</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL"
          required
        />
        <button type="submit">Check</button>
      </form>
      {errorCount !== null && (
        <p>{`Number of 404 pages found: ${errorCount}`}</p>
      )}
    </div>
  );
};

export default IndexPage;
