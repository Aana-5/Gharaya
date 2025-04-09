import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Footer />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </>
    );
}

export default App;