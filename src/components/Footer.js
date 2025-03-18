import React from 'react';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <p style={styles.text}>Footer</p>
      <p style={styles.copyright}>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </div>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    position: 'relative',
    width: '100%',
    bottom: '0',
    left: '0',
  },
  text: {
    margin: '0',
    fontSize: '18px',
  },
  copyright: {
    margin: '0',
    fontSize: '14px',
  },
};

export default Footer;
