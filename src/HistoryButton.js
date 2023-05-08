import { useState } from 'react';

const HistoryButton = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [shortenedUrls, setShortenedUrls] = useState(JSON.parse(localStorage.getItem('shortenedUrls')) || []);

  const handleDeleteClick = (index) => {
    const updatedUrls = shortenedUrls.filter((url, i) => i !== index);
    setShortenedUrls(updatedUrls);
    localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls));
  };

  const toggleShowHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className='history-button-container'>
      <button onClick={toggleShowHistory}>History</button>
      {showHistory && (
        <div className='history-container'>
          <h1>URL Shortener History</h1>
          {shortenedUrls.length === 0 ? (
            <p>No URLs have been shortened yet.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Shortened URL</th>
                  <th>Expiry Date</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {shortenedUrls.map((url, index) => (
                  <tr key={index}>
                    <td><a href={url.url}>{url.url}</a></td>
                    <td>{url.expiryDate}</td>
                    <td><button onClick={() => handleDeleteClick(index)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};
export default HistoryButton