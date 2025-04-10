import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import TermsAndConditions from './components/Terms&Conditions';
import TestComp from './components/TestComp';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Footer />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/terms&conditions" element={<TermsAndConditions />} />
                <Route path="/temp" element={<TestComp />} />
            </Routes>
        </>
    );
}

export default App;