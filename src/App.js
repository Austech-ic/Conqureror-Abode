import './App.css';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeLayout } from './layout/HomeLayout';
import { ProjectLayout } from './layout/ProjectLayout';
import { ProjectDetails } from './pages/project-page/ProjectDetails';
import { AboutUs } from './pages/about_us/AboutUs';
import { AboutUsLayout } from './layout/AboutUsLayout';

function App() {
  return (
    <Box className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/project" element={<ProjectLayout />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/about-us" element={<AboutUsLayout />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
