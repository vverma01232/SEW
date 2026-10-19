import { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Capabilities from './pages/Capabilities';
import CustomDevelopment from './pages/CustomDevelopment';
import Contact from './pages/Contact';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink p-8 text-center">
          <div>
            <p className="font-mono text-[11px] tracking-widest2 text-sew">SYSTEM FAULT</p>
            <h1 className="mt-4 font-display text-2xl text-white">Something went wrong.</h1>
            <button
              onClick={() => window.location.assign(`${process.env.PUBLIC_URL}/`)}
              className="mt-8 bg-sew px-6 py-3 font-mono text-[11px] tracking-widest2 text-white"
              data-testid="error-reload-btn"
            >
              RELOAD
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/custom-product-development" element={<CustomDevelopment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
