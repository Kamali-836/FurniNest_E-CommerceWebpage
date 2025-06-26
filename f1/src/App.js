import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./AllRoutes";
import { CartProvider } from './CartContext';
import './style.css';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <AllRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;