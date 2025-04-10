import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ReturnRefund } from './components/ReturnRefund';
import TermsAndConditions from './components/Terms&Conditions';
import { Header } from './components/Header';
import TestComp from './components/TestComp';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Header/>} />
                {/* <Route path="/" element={<Footer/>} /> */}
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
                <Route path="/refund" element={<ReturnRefund/>} />
                <Route path="/terms&conditions" element={<TermsAndConditions />} />
                <Route path="/temp" element={<TestComp />} />
            </Routes>
        </>
    );
}

export default App;