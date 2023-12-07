import React, { Suspense, lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import Home from './components/Pages/Home';


const AboutPage = lazy(() => import('./components/Pages/AboutPage'));
const ContactPage = lazy(() => import('./components/Pages/ContactPage'));
const ErrorPage = lazy(() => import('./components/Pages/ErrorPage'));
const ServicesPage = lazy(() => import('./components/Pages/ServicesPage'));
const Layout = lazy(() => import('./components/Layout'));

const LoadingAnimation = () => (
  <div className="loading-animation">
    <span className="nbt-text">NBT</span>
  </div>
);

function App() {


  return (
    <Suspense fallback={ <LoadingAnimation />}>
      <Routes>
        <Route path="/nbt_biz" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
