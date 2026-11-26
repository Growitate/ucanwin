import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import AboutFounder from './components/AboutFounder';
import Services from './components/Services';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import EnquiryModal from './components/EnquiryModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenEnquiry = (serviceTitle) => {
    setSelectedService(serviceTitle || 'Not sure yet — help me choose!');
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenEnquiry={handleOpenEnquiry} />
      <main>
        <Hero onOpenEnquiry={handleOpenEnquiry} />
        <MissionVision />
        <AboutFounder />
        <Services onOpenEnquiry={handleOpenEnquiry} />
        <ContactSection preselectedService={selectedService} />
      </main>
      <Footer />
      <WhatsAppFloat />
      <EnquiryModal
        open={modalOpen}
        initialService={selectedService}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
