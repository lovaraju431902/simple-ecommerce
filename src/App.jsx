import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl sm:text-2xl font-bold">🛍️ My E-Commerce</h1>
      <nav className="space-x-2 text-sm sm:text-base overflow-x-auto whitespace-nowrap">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
        <Link to="/shipping" className="text-blue-600 hover:underline">Shipping</Link>
        <Link to="/terms" className="text-blue-600 hover:underline">Terms</Link>
        <Link to="/refund" className="text-blue-600 hover:underline">Refund</Link>
        <Link to="/privacy" className="text-blue-600 hover:underline">Privacy</Link>
      </nav>
    </header>
    <main className="p-4 max-w-4xl mx-auto">{children}</main>
    <footer className="text-center text-sm text-gray-500 mt-10 mb-4">© 2025 My E-Commerce</footer>
  </div>
);

const Home = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4 text-center">Welcome to our store!</h2>
    <p className="text-gray-700 text-center mb-6">We sell awesome products online. Shop with us!</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { name: "T-Shirts", image: "https://images.pexels.com/photos/9558567/pexels-photo-9558567.jpeg?_gl=1*izamxi*_ga*MTI3NTI0MTYwNy4xNzU0MzI0MTEw*_ga_8JE65Q40S6*czE3NTQzMjQxMTAkbzEkZzEkdDE3NTQzMjQzNzMkajEkbDAkaDA." },
        { name: "Shoes", image: "https://images.pexels.com/photos/28375818/pexels-photo-28375818.jpeg?_gl=1*1pla66v*_ga*MTI3NTI0MTYwNy4xNzU0MzI0MTEw*_ga_8JE65Q40S6*czE3NTQzMjQxMTAkbzEkZzEkdDE3NTQzMjQxNzIkajU5JGwwJGgw" },
        { name: "Watches", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?_gl=1*a0jobv*_ga*MTI3NTI0MTYwNy4xNzU0MzI0MTEw*_ga_8JE65Q40S6*czE3NTQzMjQxMTAkbzEkZzEkdDE3NTQzMjQ0NDIkajI2JGwwJGgw" },
        { name: "Bags", image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?_gl=1*1qa4wda*_ga*MTI3NTI0MTYwNy4xNzU0MzI0MTEw*_ga_8JE65Q40S6*czE3NTQzMjQxMTAkbzEkZzEkdDE3NTQzMjQyNzEkajQxJGwwJGgw" },
        { name: "Accessories", image: "https://images.pexels.com/photos/31069234/pexels-photo-31069234.jpeg?_gl=1*1llm6p6*_ga*MTI3NTI0MTYwNy4xNzU0MzI0MTEw*_ga_8JE65Q40S6*czE3NTQzMjQxMTAkbzEkZzEkdDE3NTQzMjQ3NzEkajYwJGwwJGgw" },
        { name: "Gadgets", image: "https://images.pexels.com/photos/7864614/pexels-photo-7864614.jpeg?_gl=1*n2dzjw*_ga*MTI3NTI0MTYwNy4xNzU0MzI0MTEw*_ga_8JE65Q40S6*czE3NTQzMjQxMTAkbzEkZzEkdDE3NTQzMjQ2NDMkajEkbDAkaDA." },
      ].map((item) => (
        <div key={item.name} className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
          <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded mb-3" />
          <h3 className="text-lg font-semibold text-center">{item.name}</h3>
        </div>
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="bg-white rounded p-6 shadow">
    <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
    <p>Email: support@yourbusiness.com</p>
    <p>Phone: +91-9876543210</p>
    <p>Address: 123 Business St, Your City, India</p>
  </div>
);

const Shipping = () => (
  <div className="bg-white rounded p-6 shadow">
    <h2 className="text-lg font-semibold mb-2">Shipping Policy</h2>
    <p>Products are shipped within 3–5 business days. Delivery time may vary by location.</p>
  </div>
);

const Terms = () => (
  <div className="bg-white rounded p-6 shadow">
    <h2 className="text-lg font-semibold mb-2">Terms & Conditions</h2>
    <p>By using our website, you agree to our terms. We may update them at any time.</p>
  </div>
);

const Refund = () => (
  <div className="bg-white rounded p-6 shadow">
    <h2 className="text-lg font-semibold mb-2">Cancellations & Refunds</h2>
    <p>Orders can be cancelled within 24 hours. Refunds take up to 7 days after approval.</p>
  </div>
);

const Privacy = () => (
  <div className="bg-white rounded p-6 shadow">
    <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
    <p>We collect personal data for order processing only and do not share it with third parties.</p>
  </div>
);

const App=()=> {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;