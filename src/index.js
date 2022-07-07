import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

import { Navbar } from './components/navbar.js'; // Importa el componente Navbar
import { Footer } from './components/footer.js';	// Importamos el componente Footer
import { Elementos3d } from './pages/3d.js';	// Importamos el componente Elementos3d	
import { Corporativo } from './pages/corporativo.js';	// Importamos el componente Corporativo
import { Video } from './pages/edicionvideo.js';	// Importamos el componente Video
import { Editorial } from './pages/editorial.js';	// Importamos el componente Editorial
import { Marketing } from './pages/marketing.js';	// Importamos el componente Marketing
import { Personal } from './pages/personal.js';	// Importamos el componente Personal
import { Contacto } from './pages/contacto.js';	// Importamos el componente Contacto

// AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flex flex-col h-screen'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/3d" element={<Elementos3d />} />
          <Route path="/corporativo" element={<Corporativo />} />
          <Route path="/video" element={<Video />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  </div>
);