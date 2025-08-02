import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AboutMeSection from './components/AboutMeSection';
import TestServices from './components/TestServices.jsx';
import ContactPage from './components/ContactPage.jsx';
import Box from '@mui/material/Box';

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Box id="home"><HeroSection /></Box>
              <Box id="about"><AboutMeSection /></Box>
              <Box id="services"><TestServices /></Box>
              <Box id="skills"><SkillsSection /></Box>
              <Box id="projects"><ProjectsSection /></Box>
              <Box id="contact"><ContactSection /></Box>
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
