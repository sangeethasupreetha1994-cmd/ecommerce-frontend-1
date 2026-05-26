import React from 'react'
import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Contact from "./pages/Contact"

function App() {

  return (
    <>

    <Navbar />

    <Routes>

      <Route
      path="/"
      element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
      />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
      path="/product/:id"
      element={<ProductDetail />}
      />

      <Route
      path="/cart"
      element={<Cart />}
      />

      <Route
      path="/orders"
      element={<Orders />}
      />

      <Route
      path="/contact"
      element={<Contact />}
      />

    </Routes>

    <Footer />

    </>
  )
}

export default App