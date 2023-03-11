import { useState, useEffect } from 'react';
import './preloader.css'; 

function Preloader() {
  const [text, setText] = useState('');
  const loadingText = 'Fin-traka';
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length === loadingText.length) {
        clearInterval(interval);
      } else {
        setText(prevText => prevText + loadingText.charAt(prevText.length));
      }
    }, 200); // adjust the speed here

    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  function handleLoad() {
    setTimeout(() => {
      setShowPreloader(false);
    }, 6000); // add a 1 second delay before hiding the preloader
  }
  
  handleLoad()

  return (
    <div className={`preloader-container${showPreloader ? ' show' : ''}`}>
      <div className="preloader">
        <p className="text">{text}</p>
      </div>
    </div>
  );
}



export default Preloader