'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: "Essential Hoodie", price: 95 },
  { id: 2, name: "Signature Tee", price: 45 },
  { id: 3, name: "Tailored Cargo Pants", price: 110 },
  { id: 4, name: "Urban Overshirt", price: 130 },
  { id: 5, name: "Minimal Cap", price: 35 },
  { id: 6, name: "Structured Jacket", price: 180 },
];

export default function Page() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const placeOrder = () => { setOrderPlaced(true); setCart([]); };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-extrabold tracking-wide">SOLAO</motion.h1>
        <p className="mt-4 text-lg text-gray-300">Urban refinement. Fine streetwear.</p>
      </section>

      <section className="py-24 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map(p => (
            <div key={p.id} className="bg-neutral-900 rounded-2xl p-6">
              <div className="h-64 bg-neutral-800 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-400 mt-2">${p.price} USD</p>
              <button className="mt-4 w-full bg-gray-700 py-2 rounded" onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-neutral-950 text-center">
        <h2 className="text-3xl font-bold mb-6">Cart ({cart.length})</h2>
        {orderPlaced ? (
          <p className="text-green-400">Order placed successfully. We will contact you.</p>
        ) : cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          <>
            <p className="text-gray-400 mb-6">Total: ${cart.reduce((a,b)=>a+b.price,0)} USD</p>
            <button className="px-10 py-4 bg-gray-700 rounded" onClick={placeOrder}>Place Order</button>
            <p className="text-gray-500 text-sm mt-4">Payment handled manually</p>
          </>
        )}
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">© {new Date().getFullYear()} Solao. All rights reserved.</footer>
    </div>
  );
}