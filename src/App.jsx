import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ReturnRefund } from './components/ReturnRefund';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Footer />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
                <Route path="/refund" element={<ReturnRefund/>} />
            </Routes>
        </>
    );
}

export default App;