import React from 'react';

const PlaygroundDemo: React.FC = () => {
  return (
    <iframe
      src="https://stackblitz.com/edit/stackblitz-starters-zzr51s?embed=1&file=src%2Fmain.ts"
      className="w-full h-full"
      style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        minHeight: '800px',
      }}
    ></iframe>
  );
};

export default PlaygroundDemo;
