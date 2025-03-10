import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch products from Fake Store API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const isItemInCart = cartItems.find(item => item.id === product.id);
    if (isItemInCart) {
      alert('Item already added to the cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
