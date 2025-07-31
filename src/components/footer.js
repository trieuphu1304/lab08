import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 MyMovieApp. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#20232a',
    color: '#ffffff',
    padding: '20px',
    textAlign: 'center',
    marginTop: 'auto'
  }
};

export default Footer;
