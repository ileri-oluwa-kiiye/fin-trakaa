import { useState, useEffect } from 'react';
import './preloader.css'; // import your preloader styles here

function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPreloader(false);
    }, 1100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`preloader-container${showPreloader ? ' show' : ''}`}>
      <div className="preloader">
        <div className="preloader-spinner"></div>
        <div className="preloader-text">Fin-traka</div>
      </div>
    </div>
  );
}




export default Preloader