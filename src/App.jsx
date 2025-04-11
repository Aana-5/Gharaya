import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ReturnRefund } from './components/ReturnRefund';
import TermsAndConditions from './components/Terms&Conditions';
import { AppLayout } from './components/LayOuts/AppLayout';
import RegistrationForm from './components/RegistrationPage';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                { path: "about", element: <About /> },
                { path: "contact", element: <ContactUs /> },
                { path: "privacypolicy", element: <PrivacyPolicy /> },
                { path: "refund", element: <ReturnRefund /> },
                { path: "faq", element: <FAQ /> },
                { path: "terms&conditions", element: <TermsAndConditions /> },
                { path: "registration", element: <RegistrationForm /> },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;