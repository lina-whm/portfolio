import React, { useState, useEffect } from 'react';

const ViewportInfo = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: ''
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let breakpoint = '';
      
      if (width >= 1200) breakpoint = 'XL (≥1200px)';
      else if (width >= 992) breakpoint = 'LG (≥992px)';
      else if (width >= 768) breakpoint = 'MD (≥768px)';
      else if (width >= 576) breakpoint = 'SM (≥576px)';
      else breakpoint = 'XS (<576px)';

      setViewport({
        width,
        height: window.innerHeight,
        breakpoint
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      {viewport.breakpoint} | {viewport.width}×{viewport.height}
    </div>
  );
};

export default ViewportInfo;