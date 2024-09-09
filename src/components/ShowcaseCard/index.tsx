import React, { useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

const ShowcaseCard = ({ src, height = 'auto', width = '100%' }) => {
  const { colorMode } = useColorMode();
  const iframeRef = useRef(null); // Create a ref for the iframe element
  const loaderRef = useRef(null); // Create a ref for the loader

  // Function to send the theme to the iframe
  const sendThemeToIframe = (iframe) => {
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        {
          theme: colorMode === 'dark' ? 'dark' : 'light',
        },
        '*'
      );
    }
  };

  // Send theme when the theme changes
  useEffect(() => {
    const iframe = iframeRef.current;
    sendThemeToIframe(iframe);
  }, [colorMode]); // Re-run when the theme changes

  return (
    <div className={styles.showCaseCard} style={{ height: height, width: width }}>
      {/* Loading spinner (visible until iframe loads) */}
      <div className={styles.loaderContainer} ref={loaderRef}>
        <div className={styles.loader}></div>
      </div>

      <iframe
        ref={iframeRef} // Attach the ref to the iframe
        src={src}
        className={styles.iframe}
        height={height}
        width={width}
        allowFullScreen
        loading="lazy"
        onLoad={() => {
          const loader = loaderRef.current;
          if (loader) {
            loader.style.display = 'none'; // Hide the loader when iframe loads
          }

          // Send the theme message after iframe loads
          const iframe = iframeRef.current;
          sendThemeToIframe(iframe);
        }}
      />
    </div>
  );
};

export default ShowcaseCard;
