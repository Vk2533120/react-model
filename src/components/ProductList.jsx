// components/ProductList.js
import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.title} style={styles.image} />
          <h3 style={styles.title}>{product.title}</h3>
          <p style={styles.price}>${product.price.toFixed(2)}</p>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    padding: '1rem',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    width: '100%',
    maxWidth: '250px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Ensures consistent spacing
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '1rem',
    marginBottom: '.5rem',
    minHeight: '50px', // Ensures consistent height for titles
  },
  price: {
    fontSize: '.9rem',
    color: '#555',
    marginBottom: '.5rem',
  },
  buttonContainer: {
    marginTop: 'auto', // Pushes the button to the bottom of the card
  },
  button: {
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '8px',
    border: 'none',
    padding: '.5rem 1rem',
    cursor: 'pointer',
    fontSize: '.9rem',
    transition: 'all 0.3s ease-in-out',
  },
};

export default ProductList;
