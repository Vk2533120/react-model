// components/CartModal.js
import React from 'react';

const CartModal = ({ cartItems, removeFromCart, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.heading}>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} style={styles.cartItem}>
              <span>{item.title}</span>
              <button
                style={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button style={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
  },
  heading: {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    textAlign: 'center',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '.5rem',
  },
  removeButton: {
    backgroundColor: '#FF4B4B',
    color: '#fff',
    borderRadius: '8px',
    border: 'none',
    padding: '.5rem 1rem',
    cursor: 'pointer',
    fontSize: '.9rem',
    transition: 'transform .2s ease-in-out, background-color .2s ease-in-out',
  },
  closeButton: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '8px',
    border: 'none',
    padding: '.75rem 1.5rem',
    cursor: 'pointer',
    width: '100%',
    marginTop: '.75rem',
  },
};

// Adding hover effects using inline styles
styles.removeButton['&hover'] = {
  backgroundColor: '#FF0000', // Darker red on hover
};

export default CartModal;
