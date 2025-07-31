import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>🎬 MyMovieApp</div>
      <nav style={styles.nav}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>Movies</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#20232a',
    color: '#fff',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  nav: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontWeight: '500'
  }
};

export default Header;
