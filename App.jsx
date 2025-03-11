
import AppWithSections from './AppWithSections';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NotFound from './pages/NotFound';
import { Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';
import CommunityPage from './pages/CommunityPage';

const App = () => {
    return (
        <Routes> {/* Routes component is OK here */}
            <Route path="/" element={<AppWithSections />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;