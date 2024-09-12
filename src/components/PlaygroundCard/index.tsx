import React from 'react';
import styles from './styles.module.css';

const PlaygroundCard = ({ src, height = 'auto', width = '100%' }) => {
  return (
    <iframe
      className={styles.playgroundCard}
      src={src}
      height={height}
      width={width}
      allowFullScreen
      style={{
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '2px',
        minHeight: '800px',
      }}
    ></iframe>
  );
};

export default PlaygroundCard;