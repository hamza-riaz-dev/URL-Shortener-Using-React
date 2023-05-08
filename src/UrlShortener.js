import { useState } from 'react';

const UrlShoetener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleShortenClick = (event) => {
    event.preventDefault();
    
    if (!originalUrl.includes('.com') && !originalUrl.includes('.net')) {
      setErrorMessage('Invalid URL format. Please enter a valid URL with either .com or .net domain.');
      setShortenedUrl('');
      setExpiryDate('');

    } else {
      const randomString = Math.random().toString(36).substring(2, 6);
      const newShortenedUrl = `https://sl.com/${randomString}`;
      setShortenedUrl(newShortenedUrl);
      setErrorMessage('');

      const today = new Date();
      const expiry = new Date(today);
      expiry.setDate(today.getDate() + 7);
      const expiryDateString = expiry.toDateString();
      setExpiryDate(expiryDateString);

      const storedUrls = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
      storedUrls.push({ url: newShortenedUrl, expiryDate: expiry });
      localStorage.setItem('shortenedUrls', JSON.stringify(storedUrls));
    }
  };


 
  

  return (
    <div className='inputcontainer'>
    <h1>URL <span>Shortener</span></h1>
    <div>
      <input type='text' placeholder='Paste a link to shorten URL' value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)}></input>
      <button onClick={handleShortenClick}>Shorten</button>
    </div>
    {errorMessage && (
      <div>
        <p>{errorMessage}</p>
      </div>
    )}
    {shortenedUrl && !errorMessage && (
      <div>
        <p>Shortened URL: <a href={shortenedUrl}>{shortenedUrl}</a></p>
        <p>Expiry Date: {expiryDate}</p>
      </div>
    )}
  </div>
);
};

export default UrlShoetener;