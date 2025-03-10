// components/Navbar.js
import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>Fake Store</h1>
      <button style={styles.cartButton} onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  title: { margin: 0 },
  cartButton: {
    backgroundColor: '#555',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderRadius: '4px',
  },
};

export default Navbar;
