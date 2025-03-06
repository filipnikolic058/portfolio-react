import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ScrollToHashElement from './Functions/ScrollToHashElement';
import './index.css';
import { MojServisDeleteAccount, MojServisPrivacyPolicy } from './Pages/MojServis';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h2>Page Not Found</h2>
      <div
        className='main-button'
        onClick={() => navigate('/')}
      >Go Back to Home</div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mojservis/delete" element={<MojServisDeleteAccount />} />
        <Route path="/mojservis/privacy-policy" element={<MojServisPrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);